/**
 * Created by burmistrov on 02/06/2017.
 */
import React, { Component } from 'react';
import { isEqual } from 'lodash';
import { InfiniteScroll, CRMItem, CRMItemHeader, ContactNoteDialog } from '../../components';
import { GetMoreCRMItemsMutation, GetNotesMutation } from '../../../relay/mutations';
import { commitUpdate } from '../../../utils';
import ImageWaiting from '../../../assets/loading.gif';
import styles from '../styles/containers/MainContainer.scss';

export default class AllLeadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      items: this.getItems(props),
      showNoteDialog: false,
      notes: [],
      name: ''
    };
    this.updateRelayVariable(props.params);
    this.getNotes(this.state.items);
  }
  componentWillReceiveProps(newProps) {
    if (!isEqual(newProps.params, this.props.params)) {
      this.updateRelayVariable(newProps.params);
    }
    if (!isEqual(newProps.viewer, this.props.viewer)) {
      const items = this.getItems(newProps);
      this.getNotes(items);
      this.setState({ items });
    }
  }
  getNotes(items) {
    const contactIds = items.map(item => item.contactId);
    if (contactIds && contactIds.length > 0) {
      commitUpdate(GetNotesMutation, { contactIds })
        .then((res) => {
          console.log('GetNotesMutation', res);
          const contactItems = this.state.items.concat();
          res.getNotes.contactNotes.forEach((item) => {
            const notes = JSON.parse(item.notes);
            this.updateContactNotes(contactItems, item.contactId, notes);
          });
          this.setState({ items: contactItems });
        });
    }
  }
  getCursor() {
    const length = this.state.items.length;
    if (length > 0) {
      return this.state.items[length - 1].cursor || '';
    }
    return '';
  }
  getItems(props) {
    if (props.viewer && props.viewer.crmItems) {
      return props.viewer.crmItems.items;
    }
    return [];
  }
  loadMore = () => {
    const { relay } = this.props;
    const cursor = this.getCursor();
    const query = relay.variables.query;
    if (cursor && cursor.length > 0) {
      commitUpdate(GetMoreCRMItemsMutation, { cursor, query })
        .then((res) => {
          console.log('GetMoreCRMItemsMutation', res);
          let items = [{ id: 'empty_item', empty: true }];
          if (res.getMoreCRMItems.crmItems.length > 0) {
            items = res.getMoreCRMItems.crmItems;
            this.getNotes(items);
          }
          const newItems = this.state.items.concat(items);
          this.setState({ items: newItems });
        });
    }
  };
  updateContactNotes(contactItems, contactId, notes) {
    contactItems.forEach((contact) => {
      if (contact.contactId === contactId) {
        if (!contact.notes) {
          contact.notes = [];
        }
        if (notes.length > 0) {
          contact.notes = contact.notes.concat(notes);
        }
      }
    });
  }
  updateRelayVariable(param) {
    const { relay } = this.props;
    const query = relay.variables.query;
    const keywords = param.keywords.split('_');
    if (keywords[0] === 'noble' && query !== keywords[1]) {
      relay.forceFetch({ query: keywords[1] });
    }
  }
  showNote = (notes, name) => {
    this.setState({ showNoteDialog: true, notes, name });
  };
  closeNoteDialog = () => {
    this.setState({ showNoteDialog: false, notes: [], name: '' });
  };
  renderLoader() {
    return (
      <div className={styles.loader}>
        Loading more CRM information...
        <div className={styles.loadingImage} style={{ background: `url(${ImageWaiting}) center / cover` }} />
      </div>
    );
  }
  renderNoLoader() {
    return (
      <div className={styles.loader}>
        No more leads...
      </div>
    );
  }
  render() {
    const { items, showNoteDialog, notes, name } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <InfiniteScroll
            loader={this.renderLoader()}
            noLoader={this.renderNoLoader()}
            loadMore={this.loadMore}
            hasMore={this.getCursor().length > 0}
          >
            <CRMItemHeader />
            {items.map((item, index) => (
              <CRMItem
                item={item}
                key={item.id}
                index={index}
                showNote={this.showNote}
              />
            ))}
          </InfiniteScroll >
        </div>
        {showNoteDialog &&
        <ContactNoteDialog notes={notes} name={name} onClose={this.closeNoteDialog} />
        }
      </div>
    );
  }
}

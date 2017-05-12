import React from 'react';
import { isEqual } from 'lodash';
import MainContainerAction from '../../action/MainContainerAction';
import { InfiniteScroll, CRMItem, CRMItemHeader } from '../../components';
import { GetMoreCRMItemsMutation } from '../../../relay/mutations';
import { commitUpdate } from '../../../utils';
import styles from '../styles/containers/MainContainer.scss';

export default class MainContainer extends MainContainerAction {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      items: this.getItems(props)
    };
  }
  componentWillReceiveProps(newProps) {
    if (!isEqual(newProps.viewer, this.props.viewer)) {
      this.setState({ items: this.getItems(newProps) });
    }
  }
  loadMore = () => {
    const cursor = this.getCursor();
    if (cursor && cursor.length > 0) {
      commitUpdate(GetMoreCRMItemsMutation, { cursor })
        .then((res) => {
          console.log('GetMoreCRMItemsMutation', res);
          const items = res.getMoreCRMItems.crmItems;
          const newItems = this.state.items.concat(items);
          this.setState({ items: newItems });
        });
    }
  };
  getCursor() {
    const length = this.state.items.length;
    if (length > 0) {
      return this.state.items[length - 1].cursor;
    }
    return '';
  }
  getItems(props) {
    if (props.viewer && props.viewer.crmItems) {
      return props.viewer.crmItems.items;
    }
    return [];
  }
  renderLoader() {
    return (
      <div className='loader'>Loading ...</div>
    );
  }
  render() {
    const { items } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>NOBLE GOLD AFFILIATE DASHBOARD1</div>
        </div>
        <div>
          <InfiniteScroll
            loader={this.renderLoader()}
            loadMore={this.loadMore}
            hasMore={this.getCursor().length > 0}
          >
            <CRMItemHeader />
            {items.map((item, index) => (
              <CRMItem item={item} key={item.id} index={index} />
            ))}
          </InfiniteScroll >
        </div>
      </div>
    );
  }
}

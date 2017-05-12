import React from 'react';
import _ from 'lodash';
import MainContainerAction from '../../action/MainContainerAction';
import { InfiniteScroll, CRMItem, CRMItemHeader } from '../../components';
import styles from '../styles/containers/MainContainer.scss';

export default class MainContainer extends MainContainerAction {
  constructor(props) {
    super(props);
    this.state = {
      items: _.range(1, 30),
      hasMore: true
    };
  }
  loadMore = () => {
    console.log('load');
    setTimeout(() => {
      this.setState({
        items: _.range(1, 50),
        hasMore: false
      });
    }, 1000);
  };
  renderLoader() {
    return (
      <div className='loader'>Loading ...</div>
    );
  }
  render() {
    console.log('this.props', this.props);
    let items = [];
    if (this.props.viewer && this.props.viewer.crmItems) {
      items = this.props.viewer.crmItems.items;
    }
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>NOBLE GOLD AFFILIATE DASHBOARD1</div>
        </div>
        <div>
          <InfiniteScroll
            loader={this.renderLoader()}
            loadMore={this.loadMore}
            hasMore={this.state.hasMore}
          >
            <CRMItemHeader />
            {items.map((item, index) => (
              <CRMItem item={item} id={item.id} index={index} />
            ))}
          </InfiniteScroll >
        </div>
      </div>
    );
  }
}

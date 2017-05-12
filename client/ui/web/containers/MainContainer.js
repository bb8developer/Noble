import React from 'react';
import _ from 'lodash';
import MainContainerAction from '../../action/MainContainerAction';
import { InfiniteScroll } from '../../components';
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
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>NOBLE GOLD AFFILIATE DASHBOARD1</div>
        </div>
        <div>
          <InfiniteScroll loader={<div className="loader">Loading ...</div>} loadMore={this.loadMore} hasMore={this.state.hasMore}>
            {this.state.items.map((item) => (
              <div>item{item}</div>
            ))}
          </InfiniteScroll >
        </div>
      </div>
    );
  }
}

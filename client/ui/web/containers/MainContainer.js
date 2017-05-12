import React from 'react';
import MainContainerAction from '../../action/MainContainerAction';
import styles from '../styles/containers/MainContainer.scss';

export default class MainContainer extends MainContainerAction {
  render() {
    console.log('this.props', this.props);
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>NOBLE GOLD AFFILIATE DASHBOARD1</div>
        </div>
      </div>
    );
  }
}

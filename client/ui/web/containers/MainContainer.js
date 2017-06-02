import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import AllLeadContainer from './AllLeadContainer';
import styles from '../styles/containers/MainContainer.scss';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }
  render() {
    let title = '';
    if (this.props.params && this.props.params.keywords) {
      title = this.props.params.keywords.split('_').join(' ');
      title = title.toUpperCase();
      title = `${title} DASHBOARD`;
    }
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>{title}</div>
        </div>
        <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
          <Tab>All Leads</Tab>
          <Tab>Closed Leads</Tab>
          <Tab>Pending Leads</Tab>
        </Tabs>
        <AllLeadContainer {...this.props} />
      </div>
    );
  }
}

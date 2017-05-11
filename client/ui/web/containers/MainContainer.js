import React from 'react';
import MainContainerAction from '../../action/MainContainerAction';

export default class MainContainer extends MainContainerAction {
  render() {
    console.log('this.props.viewer', this.props.viewer);
    return <div />;
  }
}

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class MainContainerAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
    };
  }

  componentDidMount() {
  }
}

import React from 'react';
import 'react-mdl/extra/css/material.deep_orange-orange.min.css';
import 'react-mdl-extra/dist/react-mdl-extra.min.css';
import 'normalize.css/normalize.css';
import styles from './web/styles/containers/App.scss';
import ImageWaiting from '../assets/loading.gif';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWaiting: false
    };
  }
  onShowWaiting = (showWaiting) => {
    this.setState({ showWaiting });
  };
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        onShowWaiting: this.onShowWaiting
      })
    );
    const style = {};
    if (this.state.showWaiting) {
      style.position = 'fixed';
      style.width = '100%';
      style.height = '100%';
    }
    const loading = this.props.loading || this.state.showWaiting;
    return (
      <div className={styles.root} style={{ ...style }}>
        {
          !this.props.loading &&
          <div className={styles.content}>
            {childrenWithProps}
          </div>
        }
        {loading &&
          <div className={styles.loadingContainer}>
            <div className={styles.loadingImage} style={{ background: `url(${ImageWaiting}) center / cover` }} />
          </div>
        }
      </div>
    );
  }
}

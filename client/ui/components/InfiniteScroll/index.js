/**
 * Created by nick on 12/05/2017.
 */
import React from 'react';

function getTopPosition(domElt) {
  if (!domElt) {
    return 0;
  }
  return domElt.offsetTop + getTopPosition(domElt.offsetParent);
}

export class InfiniteScroll extends React.Component {
  static defaultProps = {
    pageStart: 0,
    hasMore: false,
    loadMore: () => {},
    threshold: 250
  };
  constructor(props) {
    super(props);
    this.instanceRef = null;
  }
  componentDidMount() {
    this.pageLoaded = this.props.pageStart;
    this.attachScrollListener();
  }
  componentDidUpdate() {
    this.attachScrollListener();
  }
  componentWillUnmount() {
    this.detachScrollListener();
  }
  attachScrollListener() {
    if (!this.props.hasMore) {
      return;
    }
    window.addEventListener('scroll', this.scrollListener);
    window.addEventListener('resize', this.scrollListener);
  }
  detachScrollListener() {
    window.removeEventListener('scroll', this.scrollListener);
    window.removeEventListener('resize', this.scrollListener);
  }
  scrollListener = (arg1, arg2) => {
    console.log('e', arg1, arg2);
    if (this.instanceRef) {
      const el = this.instanceRef;
      let scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (window.pageYOffset !== undefined) {
        scrollTop = window.pageYOffset;
      }
      const topPosition = (getTopPosition(el) + el.offsetHeight) - scrollTop - window.innerHeight;
      if (topPosition < Number(this.props.threshold)) {
        this.detachScrollListener();
        this.props.loadMore(this.pageLoaded += 1);
      }
    }
  };
  render() {
    const { props } = this;
    return (
      <div ref={ref => (this.instanceRef = ref)}>
        {props.children}
        {props.hasMore && props.loader}
      </div>
    );
  }
}

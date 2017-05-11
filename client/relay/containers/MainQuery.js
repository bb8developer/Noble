import Relay from 'react-relay';

export default {
  initialVariables: {
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on ViewerType {
      }`
  }
};

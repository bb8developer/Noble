import Relay from 'react-relay';
import { CRMItemFragment } from '../fragments';

export default {
  initialVariables: {
    query: ''
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on ViewerType {
        crmItems(query: $query) {
          ${CRMItemFragment}
        }
      }`
  }
};

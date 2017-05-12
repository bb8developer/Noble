import Relay from 'react-relay';
import { CRMItemFragment } from '../fragments';

export default {
  initialVariables: {
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on ViewerType {
        crmItems {
          ${CRMItemFragment}
        }
      }`
  }
};

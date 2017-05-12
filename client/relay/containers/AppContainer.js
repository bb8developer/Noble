import Relay from 'react-relay';
import App from '../../ui/App';
import { CRMItemFragment } from '../fragments';

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ViewerType {
        user {
          id
        }
      }`
  }
});

import Relay from 'react-relay';
import MainContainer from '../../ui/web/containers/MainContainer';
import MainQuery from './MainQuery';

export default Relay.createContainer(MainContainer, MainQuery);

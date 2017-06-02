import Relay from 'react-relay';

const configName = process.env.NODE_ENV || 'development';
export default function refreshRelayNetwork(token) {
  const url = configName === 'development' ?
    'http://172.20.2.77:3005' : `http://${window.location.host.split(':')[0]}:3005`;
  Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer(url, {
      fetchTimeout: 300000,
      retryDelays: [300000],
      headers: {
        Authorization: token
      },
    })
  );
}

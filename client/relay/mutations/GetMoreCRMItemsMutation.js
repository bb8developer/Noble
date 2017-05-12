import Relay from 'react-relay';
import { CRMItemFragment } from '../fragments';

const fatQuery = Relay.QL`
  fragment on getMoreCRMItemsPayload {
    crmItems {
      ${CRMItemFragment}
    }
  }
`;
export class GetMoreCRMItemsMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`
      mutation { getMoreCRMItems }
    `;
  }

  /**
   * define update user mutation input parameters
   * @cursor: cursor
   */
  getVariables() {
    return { cursor: this.props.cursor };
  }

  getFatQuery() {
    return fatQuery;
  }
  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [fatQuery]
    }];
  }
}

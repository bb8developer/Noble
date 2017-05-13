import Relay from 'react-relay';

const fatQuery = Relay.QL`
  fragment on getMoreCRMItemsPayload {
    crmItems {
      id,
      cursor,
      owner {
        name,
        id,
        email,
        phone,
      },
      created_time,
      properties,
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

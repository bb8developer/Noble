import Relay from 'react-relay';

const fatQuery = Relay.QL`
  fragment on getMoreCRMItemsPayload {
    crmItems {
      id,
      contactId,
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
    const { cursor, query } = this.props;
    return { cursor, query };
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

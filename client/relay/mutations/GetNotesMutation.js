import Relay from 'react-relay';

const fatQuery = Relay.QL`
  fragment on getNotesPayload {
    contactNotes {
      contactId,
      notes
    }
  }
`;
export class GetNotesMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`
      mutation { getNotes }
    `;
  }

  /**
   * define update user mutation input parameters
   * @cursor: cursor
   */
  getVariables() {
    const { contactIds } = this.props;
    return { contactIds };
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

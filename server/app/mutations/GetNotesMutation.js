/**
 * Created by nick on 12/05/2017.
 */
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLString, GraphQLList } from 'graphql';
import { getNoteByContactIds } from '../../services/crm';

export const getNotesMutation = mutationWithClientMutationId({
  name: 'getNotes',
  inputFields: {
    contactIds: {
      type: new GraphQLList(GraphQLString)
    },
  },
  description: 'Get notes from contact ids',
  outputFields: {
    notes: {
      type: new GraphQLList(GraphQLString),
    }
  },

  mutateAndGetPayload: async (input, { request }) => {
    const contactIds = input.contactIds || [];
    const notes = await getNoteByContactIds(contactIds);
    return {
      notes
    };
  }
});

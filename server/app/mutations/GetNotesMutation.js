/**
 * Created by nick on 12/05/2017.
 */
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';
import { noteLoader } from '../dataloader';

export const NoteType = new GraphQLObjectType({
  name: 'NoteType',
  description: 'CRM Note Information',
  fields: {
    contactId: {
      type: GraphQLString,
      description: 'Contact ID',
    },
    notes: {
      type: GraphQLString,
      description: 'note information'
    },
  }
});
export const getNotesMutation = mutationWithClientMutationId({
  name: 'getNotes',
  inputFields: {
    contactIds: {
      type: new GraphQLList(GraphQLString)
    },
  },
  description: 'Get notes from contact ids',
  outputFields: {
    contactNotes: {
      type: new GraphQLList(NoteType),
    }
  },

  mutateAndGetPayload: async (input, { request }) => {
    const contactIds = input.contactIds || [];
    const contactNotes = await noteLoader.loadMany(contactIds);
    console.log('contactNotes', contactIds, contactNotes);
    return {
      contactNotes
    };
  }
});

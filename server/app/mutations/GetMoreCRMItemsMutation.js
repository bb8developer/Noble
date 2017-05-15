/**
 * Created by nick on 12/05/2017.
 */
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLString, GraphQLList } from 'graphql';
import { CRMItemType } from '../types/CRMItemType';
import { getContactByTagFilter } from '../../services/crm';

export const getMoreCRMItemsMutation = mutationWithClientMutationId({
  name: 'getMoreCRMItems',
  inputFields: {
    cursor: {
      type: GraphQLString
    },
    query: {
      type: GraphQLString,
      description: 'search keyword'
    }
  },
  description: 'Get next CRM items using cursors',
  outputFields: {
    crmItems: {
      type: new GraphQLList(CRMItemType),
    }
  },

  mutateAndGetPayload: async (input, { request }) => {
    const cursor = input.cursor || '';
    const query = input.query || '';
    const crmItems = await getContactByTagFilter(query, cursor, 20);
    return {
      crmItems
    };
  }
});

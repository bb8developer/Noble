/**
 * Created by nick on 12/05/2017.
 */
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLString, GraphQLList } from 'graphql';
import { CRMItemType } from '../types/CRMItemType';
import { contactLoader } from '../dataloader';

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
    const tag = input.query || '';
    const pageSize = input.pageSize || 20;
    const loaderQuery = `${tag}::${cursor}::${pageSize}`;
    const crmItems = await contactLoader.load(loaderQuery);
    return {
      crmItems
    };
  }
});

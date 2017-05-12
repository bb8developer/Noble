/**
 * Created by nick on 12/05/2017.
 */
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLString } from 'graphql';
import { ListCRMItemType } from '../types/ListCRMItemType';
import { getContactByTagFilter, getNoteByContacts } from '../../services/crm';

export const getMoreCRMItemsMutation = mutationWithClientMutationId({
  name: 'getMoreCRMItems',
  inputFields: {
    cursor: {
      type: GraphQLString
    },
  },
  description: 'Get next CRM items using cursors',
  outputFields: {
    crmItems: {
      type: ListCRMItemType
    }
  },

  mutateAndGetPayload: async (input, { request }) => {
    const ret = { id: '', items: [] };
    const cursor = input.cursor || '';
    const result = await getContactByTagFilter('affiliate_goldadvisor', cursor, 20);
    await getNoteByContacts(result);
    ret.items = result;
    console.log('ret', ret);
    return {
      crmItems: ret
    };
  }
});

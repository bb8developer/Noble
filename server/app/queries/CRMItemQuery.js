/**
 * Created by nick on 12/05/2017.
 */
import { GraphQLString, GraphQLInt } from 'graphql';
import { ListCRMItemType } from '../types/ListCRMItemType';
import { getContactByTagFilter, getNoteByContacts } from '../../services/crm';

export const CRMItemQuery = {
  description: 'CRM Item Query',
  type: ListCRMItemType,
  args: {
    cursor: {
      type: GraphQLString,
      description: 'Next CRM search cursor'
    },
    pageSize: {
      type: GraphQLInt,
      description: 'CRM Items Fetching size'
    },
    query: {
      type: GraphQLString,
      description: 'search keyword'
    }
  },
  resolve: async (arg1, args, { request }) => {
    const ret = { id: '', items: [] };
    const cursor = args.cursor || '';
    const query = args.query || '';
    const pageSize = args.pageSize || 20;
    console.log('get items');
    const result = await getContactByTagFilter(query, cursor, pageSize);
    ret.items = result;
    return ret;
  },
};

/**
 * Created by nick on 12/05/2017.
 */
import { GraphQLString, GraphQLInt } from 'graphql';
import { ListCRMItemType } from '../types/ListCRMItemType';
import { contactLoader } from '../dataloader';

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
    const tag = args.query || '';
    const pageSize = args.pageSize || 20;
    const loaderQuery = `${tag}::${cursor}::${pageSize}`;
    ret.items = await contactLoader.load(loaderQuery);
    return ret;
  },
};

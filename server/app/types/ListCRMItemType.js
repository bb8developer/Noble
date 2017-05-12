/**
 * Created by nick on 12/05/2017.
 */
import { globalIdField } from 'graphql-relay';
import { GraphQLObjectType, GraphQLList } from 'graphql';
import { nodeInterface } from '../nodeInterface';
import { CRMItemType } from './CRMItemType';

export const ListCRMItemType = new GraphQLObjectType({
  name: 'ListCRMItems',
  description: 'Array of List CRM Information.',
  fields: () => ({
    id: globalIdField('ListCRMItems'),
    items: {
      type: new GraphQLList(CRMItemType),
      description: 'CRM Item list',
      resolve: result => result.items
    },
  }),
  interfaces: [nodeInterface],
});

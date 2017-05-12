/* eslint-disable no-unused-vars, no-use-before-define */
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { nodeField } from './nodeInterface';
import { ViewerQuery } from './queries';
import {
  getMoreCRMItemsMutation
} from './mutations';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    viewer: ViewerQuery,
  })
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
    getMoreCRMItems: getMoreCRMItemsMutation
  })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

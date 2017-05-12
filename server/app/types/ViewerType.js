import { GraphQLString, GraphQLObjectType } from 'graphql';
import { CRMItemQuery, UserQuery } from '../queries';

const ViewerType = new GraphQLObjectType({
  name: 'ViewerType',
  description: 'A viewer object',
  fields: () => ({
    crmItems: CRMItemQuery,
    user: UserQuery
  })
});

export default ViewerType;

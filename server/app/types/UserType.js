import { GraphQLString, GraphQLObjectType } from 'graphql';
import { CRMItemQuery } from '../queries/CRMItemQuery';

const ViewerType = new GraphQLObjectType({
  name: 'ViewerType',
  description: 'A viewer object',
  fields: () => ({
    crmItems: CRMItemQuery,
  })
});

export default ViewerType;

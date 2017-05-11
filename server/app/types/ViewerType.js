import { GraphQLObjectType } from 'graphql';

const ViewerType = new GraphQLObjectType({
  name: 'ViewerType',
  description: 'A viewer object',
  fields: () => ({
  })
});

export default ViewerType;

import { GraphQLString, GraphQLObjectType } from 'graphql';

const ViewerType = new GraphQLObjectType({
  name: 'ViewerType',
  description: 'A viewer object',
  fields: {
    id: {
      type: GraphQLString,
      description: 'Teset Type'
    }
  }
});

export default ViewerType;

import { GraphQLString, GraphQLObjectType } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'A viewer object',
  fields: () => ({
    id: {
      type: GraphQLString
    }
  })
});

export default UserType;

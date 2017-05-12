import UserType from '../types/UserType';

export const UserQuery = {
  description: 'User query',
  type: UserType,
  resolve: async (arg1, arg2, { request }) => ({})
};

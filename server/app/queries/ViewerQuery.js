import ViewerType from '../types/ViewerType';

export const ViewerQuery = {
  description: 'Viewer query',
  type: ViewerType,
  resolve: async (arg1, arg2, { request }) => ({})
};


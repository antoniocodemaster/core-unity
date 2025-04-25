import api from './api';

export const getPostsApi = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error getting posts', error);
    throw error;
  }
};

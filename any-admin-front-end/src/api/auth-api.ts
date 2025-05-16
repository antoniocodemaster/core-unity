import api from './api';

export const loginWithCredentialsApi = async (
  email: string,
  password: string
) => {
  try {
    const response = await api.post('/post', { email, password });
    const fakeToken = '1234567890';
    return { ...response.data, token: fakeToken };
  } catch (error) {
    console.error('Error logging in', error);
    throw error;
  }
};

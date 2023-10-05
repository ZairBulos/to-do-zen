import { API_URL } from '../constants';

const create = async ({ username, password }) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (response.status !== 201) {
      throw new Error(`Http Status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  create,
};
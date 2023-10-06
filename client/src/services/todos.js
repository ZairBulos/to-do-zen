import { API_URL } from '../constants';

let token = null;

const setToken = (accessToken) => {
  token = accessToken ? `Bearer ${accessToken}` : null;
};

const getAll = async () => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      headers: {
        'Authorization': token,
      }
    });

    if (!response.ok) {
      throw new Error(`Http Status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const getById = async ({ id }) => {
  try {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      headers: {
        'Authorization': token,
      }
    });

    if (!response.ok) {
      throw new Error(`Http Status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const create = async ({ todo }) => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: {
        'Authorization': token,
      },
      body: JSON.stringify(todo)
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

const update = async ({ todo }) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': token,
      },
      body: JSON.stringify(todo)
    });

    if (!response.ok) {
      throw new Error(`Http Status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const remove = async ({ id }) => {
  try {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': token,
      }
    });

    if (response.status !== 204) {
      throw new Error(`Http Status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
  setToken,
}
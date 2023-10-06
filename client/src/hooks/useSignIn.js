import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser, logoutUser } from '../redux/authReducer';
import { useAuthStorage } from './useAuthStorage';
import authService from '../services/auth';
import todoService from '../services/todos';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const authStorage = useAuthStorage();

  const loggedIn = useSelector(state => state.auth);

  useEffect(() => {
    onInitialize();
  }, []);

  const onInitialize = async () => {
    const accessToken = await authStorage.getAccessToken();

    if (accessToken) {
      todoService.setToken(accessToken);
      dispatch(loginUser({ accessToken }));
    }
  };

  const onSignIn = async ({ username, password }) => {
    try {
      const user = await authService.login({ username, password });
      const accessToken = user.token;

      await authStorage.setAccessToken({ accessToken });
      todoService.setToken(accessToken);
      dispatch(loginUser({ accessToken }));
    } catch (error) {
      throw error;
    }
  };

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    todoService.setToken();
    dispatch(logoutUser());
  };

  return { loggedIn, onSignIn, onSignOut };
};
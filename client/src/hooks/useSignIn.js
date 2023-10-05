import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser, logoutUser } from '../redux/authReducer';
import { useAuthStorage } from './useAuthStorage';
import authService from '../services/auth';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const authStorage = useAuthStorage();

  const loggedIn = useSelector(state => state.auth);

  useEffect(() => {
    initializeUser();
  }, [dispatch]);

  const initializeUser = async () => {
    const accessToken = await authStorage.getAccessToken();

    if (accessToken) {
      dispatch(loginUser({ accessToken }));
    }
  };

  const onSignIn = async ({ username, password }) => {
    try {
      const user = await authService.login({ username, password });
      const accessToken = user.token;

      await authStorage.setAccessToken({ accessToken });
      dispatch(loginUser({ accessToken }));
    } catch (error) {
      throw error;
    }
  };

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    dispatch(logoutUser());
  };

  return { loggedIn, onSignIn, onSignOut };
};
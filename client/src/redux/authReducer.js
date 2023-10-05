import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return null;
    }
  }
});

export const { login, logout } = authReducer.actions;

export const loginUser = ({ accessToken }) => {
  return async (dispatch) => {
    dispatch(login(accessToken));
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch(logout());
  };
};

export default authReducer.reducer;
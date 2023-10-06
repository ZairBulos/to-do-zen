import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    set(state, action) {
      return action.payload;
    },
  }
});

export const { set } = todoReducer.actions;

export const initializeTodos = ({ todos }) => {
  return async (dispatch) => {
    dispatch(set(todos));
  };
};

export default todoReducer.reducer;
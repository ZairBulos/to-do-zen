import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    set(state, action) {
      return action.payload;
    },
    append(state, action) {
      state.push(action.payload);
    },
    update(state, action) {
      const updatedTodo = action.payload;
      const { id } = updatedTodo;

      return state.map((todo) =>
        todo.id !== id ? todo : updatedTodo
      );
    },
    remove(state, action) {
      const id = action.payload;

      return state.filter((todo) =>
        todo.id !== id
      );
    }
  }
});

export const { set, append, update, remove, showIncomplete } = todoReducer.actions;

export const initializeTodos = (todos) => {
  return async (dispatch) => {
    dispatch(set(todos));
  };
};

export const createTodo = (todo) => {
  return async (dispatch) => {
    dispatch(append(todo));
  };
};

export const updateTodo = (todo) => {
  return async (dispatch) => {
    dispatch(update(todo));
  };
};

export const removeTodo = (id) => {
  return async (dispatch) => {
    dispatch(remove(id));
  };
};

export default todoReducer.reducer;
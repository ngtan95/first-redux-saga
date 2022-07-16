import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  error: null,
  loading: false,
  todos: [],
};

const todoSlice = createSlice({
  name: 'todoState',
  initialState: INITIAL_STATE,
  reducers: {
    doAddTodo(state, action) {
      state.todos.push(action.payload);
    },
    doToggleTodo(state, action) {
      const todo = state.todos.find(x => x.id === action.payload);
      todo.completed = !todo.completed;
    },
    doDeleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    doFetchTodo(state, _action) {
      state.loading = true;
    },
    doFetchTodoSuccess(state, action) {
      state.todos = action.payload;
      state.loading = false;
    },
    doFetchTodoError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  doAddTodo,
  doToggleTodo,
  doDeleteTodo,
  doFetchTodo,
  doFetchTodoSuccess,
  doFetchTodoError,
} = todoSlice.actions;

export default todoSlice.reducer;

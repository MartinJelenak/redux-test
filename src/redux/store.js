import { configureStore } from '@reduxjs/toolkit';
import todos from './reducers/todoReducer';
import todoListFilter from './reducers/todoListFilter';

export default configureStore({
  reducer: {
    todos,
    todoListFilter
  },
});

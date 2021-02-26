import { configureStore } from '@reduxjs/toolkit';
import todos from './reducers/todos';
import todoListFilter from './reducers/todoListFilter';

export default configureStore({
  reducer: {
    todos,
    todoListFilter,
  },
});

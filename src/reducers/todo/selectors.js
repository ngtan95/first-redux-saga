export const getTodosList = todoState =>
  todoState.todos.filter(todo => !todo.completed);

export const getCompletedList = todoState =>
  todoState.todos.filter(todo => todo.completed);

export const getLoadingTodoList = todoState => todoState.loading;

export const getTodoError = todoState => todoState.error;

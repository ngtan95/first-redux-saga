import { simulateApiCall } from './utils';
import { TODO_DATA } from './data';

export const fetchTodos = () => {
  return simulateApiCall(TODO_DATA);
};

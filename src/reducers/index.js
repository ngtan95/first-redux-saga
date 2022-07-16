// Root Reducer
import { combineReducers } from 'redux';
import todoReduder from './todo';
import themeReducer from './theme';

const rootReducer = combineReducers({
  todoState: todoReduder,
  themeState: themeReducer,
});

export default rootReducer;

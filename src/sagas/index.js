import { all } from 'redux-saga/effects';
import { helloSaga } from './hello';
import { watchTodos } from './todo';

export default function* watchAll() {
  yield all([helloSaga(), watchTodos()]);
}

import { fetchTodos } from 'apis';
import {
  doFetchTodo,
  doFetchTodoError,
  doFetchTodoSuccess,
} from 'reducers/todo';
import { call, takeEvery, put } from 'redux-saga/effects';

export function* handleFetchTodos() {
  try {
    const response = yield call(fetchTodos);
    yield put(doFetchTodoSuccess(response));
  } catch (error) {
    yield put(doFetchTodoError(error));
  }
}

export function* watchTodos() {
  console.log("doFetchTodo.type", doFetchTodo.type);
  yield takeEvery(doFetchTodo.type, handleFetchTodos);
}

import { watchPosts } from '../ducks/posts/posts';
import { call, all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([call(watchPosts)]);
}

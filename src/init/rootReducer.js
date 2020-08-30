// Core
import { combineReducers } from 'redux';
import posts from '../ducks/posts/posts';
import counter from '../reducers/counter';

export default combineReducers({
  counter,
  posts,
});

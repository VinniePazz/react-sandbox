// Core
import { combineReducers } from 'redux';
import posts from '../reducers/posts';
import counter from '../reducers/counter';

export default combineReducers({
  counter,
  posts
});

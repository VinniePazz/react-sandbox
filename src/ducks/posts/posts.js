/* eslint-disable default-case */
import { takeEvery, call, all, put, apply } from 'redux-saga/effects';
import { produce } from 'immer';

// Actions
const SET_POSTS_FILTER = 'react-sandbox/posts/SET_POSTS_FILTER';
const CREATE_POST = 'react-sandbox/posts/CREATE_POST';
const CREATE_POST_ASYNC = 'react-sandbox/posts/CREATE_POST_ASYNC';
const START_CREATING_POST = 'react-sandbox/posts/START_CREATING_POST';
const FINISH_CREATING_POST = 'react-sandbox/posts/FINISH_CREATING_POST';

// Reducer
const initialState = {
  filter: 'all',
  posts: [],
  loading: false,
};

export default produce((draft, action) => {
  switch (action.type) {
    case CREATE_POST:
      draft.posts.push(action.payload.post);
      return;
    case START_CREATING_POST:
      draft.loading = true;
      return;
    case FINISH_CREATING_POST:
      draft.loading = false;
      return;
    case SET_POSTS_FILTER:
      draft.filter = action.payload.filter;
      return;
  }
}, initialState);

// Action Creators

export const setPostsFilter = (filter) => {
  return {
    type: SET_POSTS_FILTER,
    payload: {
      filter,
    },
  };
};

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: {
      post,
    },
  };
};

export const createPostAsync = (post) => {
  return {
    type: CREATE_POST_ASYNC,
    payload: {
      post,
    },
  };
};

const startCreatingPost = () => {
  return {
    type: START_CREATING_POST,
  };
};

const finishCreatingPost = () => {
  return {
    type: FINISH_CREATING_POST,
  };
};

// Workers

function* createPostWorker({ payload }) {
  const postBody = payload.post;
  try {
    yield put(startCreatingPost());
    const response = yield call(
      fetch,
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const result = yield apply(response, response.json);
    yield put(createPost(result));
    yield put(finishCreatingPost());
  } catch (e) {
    console.log(e instanceof TypeError);
    console.log(e.message);
  } finally {
    yield put(finishCreatingPost());
  }
}

// Watchers

function* watchCreatePost() {
  yield takeEvery(CREATE_POST_ASYNC, createPostWorker);
}

export function* watchPosts() {
  yield all([call(watchCreatePost)]);
}

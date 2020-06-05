/* eslint-disable default-case */
import { takeEvery, call, all, put, apply } from 'redux-saga/effects';
import { produce } from 'immer';

// Actions
const SET_POSTS_FILTER = 'SET_POSTS_FILTER';
const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
const LOAD_POSTS = 'LOAD_POSTS';
const CREATE_POST = 'CREATE_POST';
const CREATE_POST_ASYNC = 'CREATE_POST_ASYNC';
const START_CREATING_POST = 'START_CREATING_POST';
const FINISH_CREATING_POST = 'FINISH_CREATING_POST';

// Reducer
const initialState = {
  filter: 'all',
  posts: [],
  loading: false,
};

export default produce((draft, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      draft.posts = action.payload.posts;
      return;
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
export const fetchAllPosts = () => {
  return {
    type: FETCH_ALL_POSTS,
  };
};

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    payload: {
      posts,
    },
  };
};

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
  } catch (e) {
    console.log(e instanceof TypeError);
    console.log(e.message);
  } finally {
    yield put(finishCreatingPost());
  }
}

function* fetchAllPostsWorker() {
  try {
    const response = yield call(
      fetch,
      'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = yield apply(response, response.json);
    yield put(loadPosts(posts));
  } catch (e) {
    console.log(e.message);
  }
}

// Watchers
function* watchFetchAllPosts() {
  yield takeEvery(FETCH_ALL_POSTS, fetchAllPostsWorker);
}

function* watchCreatePost() {
  yield takeEvery(CREATE_POST_ASYNC, createPostWorker);
}

export function* watchPosts() {
  yield all([call(watchCreatePost), call(watchFetchAllPosts)]);
}

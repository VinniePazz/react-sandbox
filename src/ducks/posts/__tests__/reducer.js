import postsReducer from '../posts';

const initialState = {
  filter: 'all',
  posts: [],
  loading: false,
};

describe('posts reducer', () => {
  it('should return initial state by default', () => {
    expect(postsReducer(void 0, {})).toEqual(initialState);
  });
});

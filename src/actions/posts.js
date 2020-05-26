export const setPostsFilter = (filter) => {
  return {
    type: 'SET_POSTS_FILTER',
    payload: {
      filter,
    },
  };
};

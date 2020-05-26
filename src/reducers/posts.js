const initialState = {
  filter: 'all',
  posts: [
    { title: 'cook post 1', type: 'cook', id: 1223423423 },
    { title: 'cook post 2', type: 'cook', id: 122334234234423423 },
    { title: 'cook post 3', type: 'cook', id: 1223422223423 },
    { title: 'book post 2', type: 'book', id: 123434823 },
    { title: 'book post 2', type: 'book', id: 1223422896343423 },
    { title: 'book post 2', type: 'book', id: 12234225555343423 },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_POSTS_FILTER':
      return { ...state, filter: action.payload.filter };
    default:
      return state;
  }
}

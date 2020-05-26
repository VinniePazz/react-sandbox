const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return ++state;
    case 'DECREMENT':
      return --state;
    case 'FAKE':
      return state;

    default:
      return state;
  }
}

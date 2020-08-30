export const increment = () => (dispatch) => {
  dispatch({
    type: 'INCREMENT',
  });
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const fake = () => {
  return {
    type: 'FAKE',
  };
};

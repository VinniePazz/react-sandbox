import React from 'react';
import { Provider } from 'react-redux';
import Posts from './Posts';
import { render, act } from '@testing-library/react';
import configureStore from 'redux-mock-store';
// import { act } from 'react-dom/test-utils'; another way of using oroginal "act"

const mockStore = configureStore([]);

describe('POSTS', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      posts: {
        filter: 'all',
        posts: [],
        loading: false,
      },
    });
    store.dispatch = jest.fn();
  });

  it('renders properly', () => {
    const { getByText, debug } = render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );
    debug();
    const button = getByText(/cook/i);
    expect(button).toBeInTheDocument();
  });

  it('fetch posts after first mount', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Posts />
        </Provider>
      );
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});

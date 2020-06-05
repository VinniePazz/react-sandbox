import React from 'react';
import Posts from './Posts';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../init/store';
import { fetchAllPosts } from '../../ducks/posts/posts';

jest.mock('../../ducks/posts/posts', () => ({
  fetchAllPosts: jest.fn(),
}));

describe('POSTS', () => {
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

  it('loads all posts after initial mount', () => {
    render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );
    console.log('asd', fetchAllPosts);
    expect(fetchAllPosts).toHaveBeenCalledTimes(1);
  });
});

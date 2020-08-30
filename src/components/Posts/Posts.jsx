import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  fetchAllPosts,
  setPostsFilter,
  createPostAsync,
} from '../../ducks/posts/posts';
import css from './posts.module.css';

const getPostsFilter = (state) => state.posts.filter;
const getPosts = (state) => state.posts.posts;

export const getPostsByFilter = createSelector(
  [getPostsFilter, getPosts],
  (filter, posts) => {
    switch (filter) {
      case 'all':
        return posts;
      case 'cook':
        return posts.filter((post) => post.type === 'cook');
      case 'book':
        return posts.filter((post) => post.type === 'book');
      default:
        return posts;
    }
  }
);

// for visual studio code reference
let Posts = ({ posts, fetchAllPosts, createPostAsync, setPostsFilter }) => {
  console.log('POSTS', posts);
  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);
  return (
    <div>
      <button onlick={() => setPostsFilter('all')}>ALL</button>
      <button onClick={() => setPostsFilter('cook')}>COOK</button>
      <button onClick={() => setPostsFilter('book')}>BOOK</button>
      <button onClick={() => createPostAsync({ title: 'hello' })}>
        Create post
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className={css.post}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('MSTP POSTS', state);
  const posts = getPostsByFilter(state);
  return {
    posts: posts,
  };
};

Posts = connect(mapStateToProps, {
  fetchAllPosts,
  setPostsFilter,
  createPostAsync,
})(Posts);

export default Posts;

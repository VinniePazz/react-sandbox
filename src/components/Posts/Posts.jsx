import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setPostsFilter } from '../../ducks/posts/posts';
import css from './posts.module.css';

const getPostsFilter = (state) => state.posts.filter;
const getPosts = (state) => state.posts.posts;

const getPostsByFilter = createSelector(
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

const Posts = ({ posts, setPostsFilter }) => {
  console.log('POSTS');
  return (
    <div>
      <button onClick={() => setPostsFilter('all')}>ALL</button>
      <button onClick={() => setPostsFilter('cook')}>COOK</button>
      <button onClick={() => setPostsFilter('book')}>BOOK</button>
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
  console.log('MSTP POSTS');
  const posts = getPostsByFilter(state);
  return {
    posts: posts,
  };
};

export default connect(mapStateToProps, { setPostsFilter })(Posts);

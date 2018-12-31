// @flow
import React from 'react';
import styles from './styles';
import Newsfeed from '../../../../components/data/Newsfeed/Newsfeed';
import PostsList from '../../../../components/PostsList/PostsList';

const HomeNewsfeed = () => (
  <div className={styles.containerClass}>
    <Newsfeed uid="home">
      {({ items, isLoading }) => <PostsList placeholderPosts={isLoading ? 6 : 0} posts={items} />}
    </Newsfeed>
  </div>
);

export default HomeNewsfeed;

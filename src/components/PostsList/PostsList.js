// @flow
import React from 'react';
import styles from './styles';
import PostCard, { PostCardPlaceholder } from '../PostCard/PostCard';
import type { MappedPostModel } from '../../models/posts';

type Props = {
  placeholderPosts?: number,
  posts: Array<MappedPostModel>,
};

const PostsList = ({ placeholderPosts = 0, posts }: Props) => (
  <div className={styles.containerClass}>
    {Array.from({ length: placeholderPosts }).map((item, index) => (
      <div className={styles.postClass} key={index.toString()}>
        <PostCardPlaceholder />
      </div>
    ))}
    {posts.map((post: MappedPostModel) => (
      <div className={styles.postClass} key={post.uid}>
        <PostCard title={post.title} userName={post.owner.name} />
      </div>
    ))}
  </div>
);

PostsList.defaultProps = {
  placeholderPosts: 0,
};

export default PostsList;

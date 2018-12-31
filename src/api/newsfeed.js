// @flow

import { fetchFirestoreNewsfeed } from './firestore/newsfeed/actions';
import type { FirebaseNewsfeedModel } from './firestore/newsfeed/model';
import type { MappedPostModel } from '../models/posts';
import { fetchFirestorePosts } from './firestore/posts/actions';
import { fetchPostsUsersAndMapThem } from './posts';

export function fetchNewsfeedPosts(uid: string): Promise<Array<MappedPostModel>> {
  console.log('fetchNewsfeedPosts');
  return fetchFirestoreNewsfeed(uid)
    .then((newsfeed: FirebaseNewsfeedModel | null) => {
      if (!newsfeed) return [];
      return fetchFirestorePosts(newsfeed.posts);
    })
    .then(posts => fetchPostsUsersAndMapThem(posts))
    .then(posts => posts)
    .catch(e => {
      console.error(e);
      return Promise.reject();
    });
}

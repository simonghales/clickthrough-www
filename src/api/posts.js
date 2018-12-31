// @flow

import type { FirebasePostModel } from './firestore/posts/model';
import type { FirebaseUserModel } from './firestore/users/model';
import { fetchFirestoreUsers } from './firestore/users/actions';
import type { MappedPostModel } from '../models/posts';

export function fetchPostsUsers(
  posts: Array<FirebasePostModel>
): {
  [string]: FirebaseUserModel,
} {
  const usersUids = {};
  posts.forEach(post => {
    usersUids[post.ownerUID] = true;
  });
  return fetchFirestoreUsers(Object.keys(usersUids)).then(users => {
    const usersObj = {};
    users.forEach(user => {
      usersObj[user.uid] = user;
    });
    return usersObj;
  });
}

export async function fetchPostsUsersAndMapThem(
  posts: Array<FirebasePostModel>
): Promise<Array<MappedPostModel>> {
  const users = await fetchPostsUsers(posts);
  return posts.map(post => {
    const owner = users[post.ownerUID];
    return {
      ...post,
      owner,
    };
  });
}

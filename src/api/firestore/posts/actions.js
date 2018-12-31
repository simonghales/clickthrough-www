// @flow
import type { FirebasePostModel } from './model';
import { firebaseDatabase } from '../config';

export const postsCollection = firebaseDatabase.collection('posts');

export function getFirestorePostRef(uid: string) {
  return postsCollection.doc(uid);
}

export function fetchFirestorePost(uid: string): Promise<FirebasePostModel> {
  const ref = getFirestorePostRef(uid);
  return ref
    .get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        console.log('post data exists', data);
        return data;
      }
      console.warn('post doesnt exist');
      return null;
    })
    .catch(error => {
      console.error('Error getting document:', error);
      return null;
    });
}

export function fetchFirestorePosts(uids: Array<string>): Promise<Array<FirebasePostModel>> {
  const postsPromises = uids.map(uid => fetchFirestorePost(uid));
  return Promise.all(postsPromises).then(posts => posts.filter(post => post !== null));
}

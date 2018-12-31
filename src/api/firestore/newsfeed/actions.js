// @flow
import { firebaseDatabase } from '../config';
import type { FirebaseNewsfeedModel } from './model';

export const newsfeedsCollection = firebaseDatabase.collection('newsfeed');

export function fetchFirestoreNewsfeed(uid: string): Promise<FirebaseNewsfeedModel | null> {
  const newsfeedDocRef = newsfeedsCollection.doc(uid);
  return newsfeedDocRef
    .get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        console.log('newsfeed exists', data);
        return data;
      }
      console.warn('newsfeed doesnt exist');
      return null;
    })
    .catch(error => {
      console.error('Error getting document:', error);
      return Promise.reject(error);
    });
}

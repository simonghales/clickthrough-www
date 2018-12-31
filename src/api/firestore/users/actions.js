// @flow

import { firebaseDatabase } from '../config';
import type { FirebaseUserModel } from './model';

export const usersCollection = firebaseDatabase.collection('users');

export function getFirestoreUserRef(uid: string) {
  return usersCollection.doc(uid);
}

export function fetchFirestoreUser(uid: string): Promise<FirebaseUserModel> {
  const ref = getFirestoreUserRef(uid);
  return ref
    .get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        console.log('user data exists', data);
        return data;
      }
      console.warn('user doesnt exist');
      return null;
    })
    .catch(error => {
      console.error('Error getting document:', error);
      return null;
    });
}

export function fetchFirestoreUsers(usersUids: Array<string>): Promise<Array<FirebaseUserModel>> {
  const usersPromises = usersUids.map(uid => fetchFirestoreUser(uid));
  return Promise.all(usersPromises).then(users => users.filter(user => user !== null));
}

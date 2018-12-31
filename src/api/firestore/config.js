// @flow
import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyBcRAp0N603rh8lD7-i7DGcq2L7_MY8Pp0',
  authDomain: 'clickthrough-8afe8.firebaseapp.com',
  databaseURL: 'https://clickthrough-8afe8.firebaseio.com',
  projectId: 'clickthrough-8afe8',
  storageBucket: 'clickthrough-8afe8.appspot.com',
  messagingSenderId: '999977818758',
};

firebase.initializeApp(firebaseConfig);

export const firebaseDatabase = firebase.firestore();

// Disable deprecated features
firebaseDatabase.settings({
  timestampsInSnapshots: true,
});

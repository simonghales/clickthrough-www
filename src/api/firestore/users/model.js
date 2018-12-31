// @flow

export type FirebaseUserModel = {
  image: string,
  name: string,
  posts: {
    [string]: true,
  },
  uid: string,
};

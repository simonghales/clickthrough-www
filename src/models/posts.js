// @flow

import type { FirebasePostModel } from '../api/firestore/posts/model';
import type { FirebaseUserModel } from '../api/firestore/users/model';

export type MappedPostModel = FirebasePostModel & {
  owner: FirebaseUserModel,
};

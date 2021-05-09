import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import * as firebase from 'firebase';

import keys from './keys';

if (!firebase.apps.length) {
  firebase.initializeApp(keys.firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, firebase, storage };

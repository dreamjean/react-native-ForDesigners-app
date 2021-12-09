import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import keys from "./keys";

const app = initializeApp(keys.FIREBASE_CONFIG);
const firebaseAuth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, firebaseAuth, storage };

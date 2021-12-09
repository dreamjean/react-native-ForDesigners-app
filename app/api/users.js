import { doc, getDoc, setDoc } from "firebase/firestore";

import { db } from "./firebase";

const addUser = (uid, name, email, photo) =>
  setDoc(doc(db, "users", uid), {
    id: uid,
    name,
    email,
    photo,
  });

const getUser = (uid) => getDoc(doc(db, "users", uid));

export default {
  addUser,
  getUser,
};

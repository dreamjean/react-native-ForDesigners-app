import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

import { firebaseAuth } from "./firebase";

const login = (email, password) =>
  signInWithEmailAndPassword(firebaseAuth, email, password);

const logout = () => signOut(firebaseAuth);

const register = (email, password) =>
  createUserWithEmailAndPassword(firebaseAuth, email, password);

const checkUser = (nextFunc) => onAuthStateChanged(firebaseAuth, nextFunc);

const updateAuthInfo = (displayName, photoURL) =>
  updateProfile(firebaseAuth.currentUser, {
    displayName,
    photoURL,
  });

const updateAuthEmail = (email) => updateEmail(firebaseAuth.currentUser, email);

const updateAuthPassword = (password) =>
  updatePassword(firebaseAuth.currentUser, password);

export default {
  login,
  logout,
  register,
  checkUser,
  updateAuthInfo,
  updateAuthEmail,
  updateAuthPassword,
};

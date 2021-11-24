import { useContext } from "react";

import { auth, db } from "../firebase";
import AuthContext from "./context";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const getUser = async () => {
    const { uid } = auth.currentUser;

    await db
      .collection("users")
      .doc(uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setUser(snapshot.data());
        }
      });
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return { user, setUser, getUser, logout };
};

export default useAuth;

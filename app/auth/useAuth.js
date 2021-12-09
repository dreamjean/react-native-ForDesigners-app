import { useContext } from "react";

import AuthContext from "./context";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => setUser(null);

  return { user, setUser, logOut };
};

export default useAuth;

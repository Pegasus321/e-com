import React, { createContext, useState, useEffect, useContext } from "react";
import { setIntoLocalStorage, getFromLocalStorage } from "../utils/utils";
import { LOCAL_STORAGE_KEYS } from "../constants/constants";

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    getFromLocalStorage(LOCAL_STORAGE_KEYS.user)
  );

  const [token, setToken] = useState(
    getFromLocalStorage(LOCAL_STORAGE_KEYS.token)
  );

  const updateUserAuth = ({ user, token }) => {
    setUser(user);
    setToken(token);
  };

  useEffect(() => {
    if (user) {
      setUser((data) => ({ ...data, cart: [], wishlist: [] }));
    }
    setIntoLocalStorage(LOCAL_STORAGE_KEYS.user, {
      ...user,
      cart: [],
      wishlist: [],
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, token, updateUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

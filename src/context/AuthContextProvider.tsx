import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import { createAccount, getAccountById } from "../services/accountService";
import Account from "../models/Account";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      console.log(newUser);
      setUser(newUser);
      if (newUser) {
        getAccountById(newUser.uid)
          .then((res) => {
            setAccount(res);
          })
          .catch(() => {
            createAccount({
              uid: newUser.uid,
              display_name: "",
              favorites: [],
            }).then((res) => {
              setAccount(res);
            });
          });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, account }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;

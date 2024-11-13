import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
export const Authcontect = createContext(null);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logding, setLoding] = useState(true);
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    setLoding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        console.log("your a login", currentuser);
        setUser(currentuser);
        setLoding(false);
      } else {
        setUser(null);
        setLoding(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // onAuthStateChanged(auth, (currentuser) => {
  //   if (currentuser) {
  //     console.log("your a login", currentuser);
  //   } else {
  //     console.log("no user login");
  //   }
  // });

  const names = {
    name: "shakhawat is very stylest",
    createUser,
    signin,
    signout,
    user,
    logding,
  };

  return (
    <div>
      <Authcontect.Provider value={names}>{children}</Authcontect.Provider>
    </div>
  );
};

export default Authprovider;

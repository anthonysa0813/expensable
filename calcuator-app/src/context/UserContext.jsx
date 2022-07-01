import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userObj, setUserObj] = useState({});

  return (
    <UserContext.Provider value={{ setUserObj, userObj }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

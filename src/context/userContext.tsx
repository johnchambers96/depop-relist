import React, { FC, useState } from "react";
import { useEffect } from "react";
import { storedUser } from "../types";

type UserContextType = {
  userData: storedUser | null;
};

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<storedUser | null>(null);

  useEffect(() => {
    setUser(
      JSON.parse(
        sessionStorage.getItem("autodepop:storedUser") as string
      ) as storedUser
    );
  }, []);

  return (
    <UserContext.Provider value={{ userData: user }}>
      {children}
    </UserContext.Provider>
  );
};

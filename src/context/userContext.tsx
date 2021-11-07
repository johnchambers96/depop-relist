import React, { FC, useState } from "react";
import { useEffect } from "react";
import { storedUser } from "../types";
import { fetchUser } from "../api";
import { findUsername } from "../utils";

type UserContextType = {
  userData: storedUser | null;
};

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<storedUser | null>(null);

  async function handleFetchUsers(username: string) {
    try {
      const user = await fetchUser(username);
      setUser(user);
      sessionStorage.setItem("relistdepop:user", JSON.stringify(user));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    let user = sessionStorage.getItem("relistdepop:user");
    const username = findUsername();

    if (!user && username) {
      handleFetchUsers(username);
    } else {
      setUser(JSON.parse(user as string) as storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData: user }}>
      {children}
    </UserContext.Provider>
  );
};

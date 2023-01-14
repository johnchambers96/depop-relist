import React, { FC, useState } from "react";
import { useEffect } from "react";
import { StoredUser, SessionUser } from "../types";
import { fetchUser } from "../api";
import Cookies from "js-cookie";

type UserContextType = {
  userData: StoredUser | null;
};

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<StoredUser | null>(null);

  const fetchUserData = async (username: string) => {
    try {
      const { data } = await fetchUser(username);
      setUser(data);
      sessionStorage.setItem("relistdepop:user", JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    let sessionUser = sessionStorage.getItem("relistdepop:user");
    const userId = Cookies.get("user_id");
    const userTraits = localStorage.getItem("ajs_user_traits");

    if (userId) {
      if (sessionUser) {
        setUser(JSON.parse(sessionUser));
      } else if (userTraits) {
        const user: SessionUser = JSON.parse(userTraits);
        fetchUserData(user.username);
      }
    } else {
      sessionStorage.removeItem("relistdepop:user");
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData: user }}>
      {children}
    </UserContext.Provider>
  );
};

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User } from "./types";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }
    console.log(localStorage.getItem("loggedInUser"));
  }, []);

  const setUser = (newUser: User | null) => {
    if (newUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("loggedInUser");
    }
    setUserState(newUser);
  };

  const logout = () => {
    setUser(null);
    window.location.reload();
  };  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("userContext must be used within a UserProvider");
  }
  return context;
};

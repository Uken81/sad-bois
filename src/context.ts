import React, { createContext } from 'react';

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export interface UserContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContext | null>(null);

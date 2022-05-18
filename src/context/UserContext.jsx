import React from 'react';
import {
  createContext,
  useState,
  // useEffect
} from 'react';
import { getUser } from '../services/user';


export const UserContext = createContext();

export function UserProvider({ children }) {
  // get the current user if there is one signed in
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });


  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


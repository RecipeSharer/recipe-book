import React from 'react';
import {
  createContext,
  useContext,
  useState,
  // useEffect
} from 'react';
import { getUser } from '../services/user';


const UserContext = createContext();

export default function UserProvider({ children }) {
  // get the current user if there is one signed in
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });


  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signUp,
        signIn,
        signOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used with a UserProvider')
  }

  return context;
};

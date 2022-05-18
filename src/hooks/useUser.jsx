import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { signUpUser, signInUser, signOutUser } from '../services/user';
import toast from 'react-hot-toast';

export default function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  if (context === undefined) {
    throw new Error('useAuth must be used within a UserProvider');
  }

  // sign up/in/out functions
  async function signUp(email, password) {
    try {
      const newUser = await signUpUser({ email, password });
      setUser(newUser);
      toast(`You are signed in as ${newUser.email}`);
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  }

  async function signIn(email, password) {
    try {
      const authenticatedUser = await signInUser({ email, password });
      setUser(authenticatedUser);
      toast(`You are signed in as ${authenticatedUser.email}`);
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  }

  async function signOut() {
    await signOutUser();
    setUser({ email: null });
    toast('You are signed out');
  }

  return { user, signIn, signOut, signUp };
}

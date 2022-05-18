import { useHistory, useLocation } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { useState } from 'react';


export default function Login() {

  // state
  const {
    // user,
    signUp,
    signIn
  } = useUser();
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSignInSubmit(e) {
    try {
      e.preventDefault();
      await signIn(email, password);

      // check to see if we have from url in location object
      // const url = location.state.from
      //   ? location.state.from.pathname
      //   : '/recipes';
      
      // redirect to url
      history.replace('/recipes');

    } catch (error) {
      // catches the error thrown on line 20 of UserContext
      setError(error.message);
    }
  }

  async function handleSignUpClick(e) {
    try {
      e.preventDefault();
      await signUp(email, password);

      // check to see if we have from url in location object
      // const url = location.state.from
      //   ? location.state.from.pathname
      //   : '/recipes';
      
      // redirect to url
      history.replace('/recipes');

    } catch (error) {
      // catches the error thrown on line 20 of UserContext
      setError(error.message);
    }
  }



  return (
    <div>
      <h2>Sign In / Sign Up</h2>
      <form
        action="email"
        onSubmit={handleSignInSubmit}
      >
        <input
          required
          type="email"
          name='email'
          id='email'
          placeholder='Email'
          onChange={(e)=> setEmail(e.target.value)}
        />

        <input
          required
          type="password"
          name='password'
          id='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type='submit'
        >Sign In</button>
        <button
          onClick={handleSignUpClick}
        >Sign Up
        </button>
      </form>
      <p>{error}</p>
    </div>
  )
};

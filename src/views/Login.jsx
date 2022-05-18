import React from 'react';
import { signUpUser, signInUser } from '../services/user';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useState } from 'react';


export default function Login() {

  // state
  const context = useUser();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  return (
    <div>
      <h2>Sign In / Sign Up</h2>
      <form
        action="email"
      >
        {/* className={styles['sign-in-form']}
        onSubmit= */}
        <input
          required
          type="email"
          name='email'
          id='email'
          placeholder='Email'
          // onChange=
        />

        <input
          required
          type="password"
          name='password'
          id='password'
          placeholder='Password'
          // onChange=
        />

        <button
          type='submit'
        >Sign In</button>
        <button
          // onClick=
        >Sign Up
        </button>
      </form>
      <p>{error}</p>
    </div>
  )
};

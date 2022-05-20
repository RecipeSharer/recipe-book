import useUser from '../hooks/useUser';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
  const { signOut, user } = useUser();
  const { pathname } = useLocation();
  console.log('pathname', pathname)

  return (
    <>
    {
      user.email && (
        <>
          <p>You are signed in as {user.email}</p>
          {
            (pathname != '/recipes')
              &&
              <Link to='/recipes'>
                <button>Go to Recipes List</button>
              </Link>
          }
          <button onClick={signOut}>log out</button>
        </>
      )    
    }
    </>
  )
};

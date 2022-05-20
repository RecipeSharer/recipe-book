import useUser from '../hooks/useUser';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.css';


export default function Header() {
  const { signOut, user } = useUser();
  const { pathname } = useLocation();
  console.log('pathname', pathname)

  return (
    <>
    {
      user.email && (
        <header className={styles.header}>
          <h3>Recipes</h3>
          <p>You are signed in as {user.email}</p>
          {
            (pathname != '/recipes')
              &&
              <Link to='/recipes'>
                <button>Go to Recipes List</button>
              </Link>
          }
          <button onClick={signOut}>log out</button>
        </header>
      )    
    }
    </>
  )
};

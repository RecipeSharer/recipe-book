import useUser from '../hooks/useUser';


export default function Header() {
  const { signOut, user } = useUser();

  return (
    <>
    {
      user.email ? (<>
          <p>You are signed in as {user.email}</p>
          <button onClick={signOut}>log out</button>
        </> )
        : <></>
      }
      </>
  )
};

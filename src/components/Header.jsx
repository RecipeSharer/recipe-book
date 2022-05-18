import useUser from '../hooks/useUser'

export default function Header() {
  const { signOut } = useUser();

  return (
<>
<button onClick={signOut}>log out</button>
</>
  )
};

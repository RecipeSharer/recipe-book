import { Redirect, Route, useLocation } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  const context = useUser();


  return (
    <Route {...rest}>
      {context.user.email
        ? children
        : <Redirect
          to={{
            pathname: '/',
            state: { from: location }
            }}
          />
      }
    </Route>
  );
};

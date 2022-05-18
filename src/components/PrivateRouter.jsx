import { context } from 'msw';
import React from 'react';
import { Children } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

export default function PrivateRouter() {
  const location = useLocation();
  // const context = useUser();


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

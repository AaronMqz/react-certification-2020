import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../utils/store/context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;

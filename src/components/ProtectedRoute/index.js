import React, { lazy, createContext, useContext } from 'react';

const Login = lazy(() => import('../../screens/Login'));

export const AuthContext = createContext();

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Component {...rest} /> : <Login />;
};

export default ProtectedRoute;

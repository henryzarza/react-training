import React, { lazy, createContext } from 'react';

const Login = lazy(() => import('../../screens/Login'));

export const AuthContext = createContext();

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ isAuth }) => (isAuth ? <Component {...rest} /> : <Login />)}
  </AuthContext.Consumer>
);

export default ProtectedRoute;

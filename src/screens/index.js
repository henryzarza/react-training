import React, { lazy, Suspense, useState, useCallback } from 'react';
import { Router } from '@reach/router';

import { ROUTES } from '@constants/routes';
import Loading from '@components/Loading';
import ProtectedRoute, { AuthContext } from '@components/ProtectedRoute';

const Home = lazy(() => import('./Home'));
const TimeZones = lazy(() => import('./TimeZones'));
const NotFound = lazy(() => import('./NotFound'));

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('isAuth'));

  const handleSetIsAuth = useCallback(
    (value) => {
      setIsAuth(value);
      if (value) {
        localStorage.setItem('isAuth', value);
      } else {
        localStorage.removeItem('isAuth');
      }
    },
    [setIsAuth]
  );

  return (
    <AuthContext.Provider value={{ isAuth, handleSetIsAuth }}>
      <Suspense fallback={<Loading />}>
        <Router>
          <ProtectedRoute path={ROUTES.HOME} component={Home} />
          <ProtectedRoute path={ROUTES.TIME_ZONES} component={TimeZones} />
          <NotFound default />
        </Router>
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;

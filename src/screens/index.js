import React, { lazy, Suspense, useState, useCallback } from 'react';
import { Router } from '@reach/router';

import { ROUTES, IS_AUTH } from '@constants/routes';
import Loading from '@components/Loading';
import ProtectedRoute, { AuthContext } from '@components/ProtectedRoute';
import Navbar from '@components/Navbar';
import ThemeCheckbox from '@components/ThemeCheckbox';

const Home = lazy(() => import('./Home'));
const TimeZones = lazy(() => import('./TimeZones'));
const Interesting = lazy(() => import('./Interesting'));
const NotFound = lazy(() => import('./NotFound'));

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem(IS_AUTH));

  const handleSetIsAuth = useCallback(
    (value) => {
      setIsAuth(value);
      if (value) localStorage.setItem(IS_AUTH, value);
      else localStorage.removeItem(IS_AUTH);
    },
    [setIsAuth]
  );

  return (
    <AuthContext.Provider value={{ isAuth, handleSetIsAuth }}>
      <Suspense fallback={<Loading />}>
        <ThemeCheckbox />
        {isAuth && <Navbar />}
        <Router>
          <ProtectedRoute path={ROUTES.HOME} component={Home} />
          <ProtectedRoute path={ROUTES.TIME_ZONES} component={TimeZones} />
          <ProtectedRoute path={ROUTES.INTERESTING} component={Interesting} />
          <NotFound default />
        </Router>
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;

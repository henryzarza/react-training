import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

import { ROUTES } from '@constants/routes';
import Loading from '@components/Loading';
const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Home path={ROUTES.HOME} />
        <Login path={ROUTES.LOGIN} />
      </Router>
    </Suspense>
  );
}

export default App;

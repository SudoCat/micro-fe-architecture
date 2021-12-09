import React, { Suspense } from 'react'
import AppWrapper from 'shared/Wrapper'
import Router from 'shared/Router'

import routes from '../routes'

// const AppWrapper = React.lazy(() => import('shared/Wrapper'))
// const Router = React.lazy(() => import('shared/Router'))

function Page() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to orders!</h1>
      <img
        width="450"
        src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
        alt="Nx - Smart, Extensible Build Framework"
      />
    </div>
  );
}

export function App() {
  return (
    <AppWrapper>
      <Router defaultRoutes={routes} hostApp='orders' />
    </AppWrapper>
  );
}

export default App;

import React from 'react';
import { Wrapper, Router } from '@reward-platform/example'

import routes from '../routes'
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <Wrapper>
      <Router defaultRoutes={routes} hostApp="orders" />
      <Link to="/">home</Link>
    </Wrapper>
  );
};

export default App;

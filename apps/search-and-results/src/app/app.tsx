import React, { useEffect, useState } from 'react';
import { Message } from '@reward-platform/api-interfaces';
import { Wrapper, Router } from '@reward-platform/example'

import routes from '../routes'
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <Wrapper>
      <Router defaultRoutes={routes} hostApp="search" />
      <Link to="/basket">basket</Link>
    </Wrapper>
  );
};

export default App;

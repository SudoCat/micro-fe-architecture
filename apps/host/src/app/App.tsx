import React, { Suspense, useState, useEffect } from 'react'
import { Link, useRoutes, RouteObject } from 'react-router-dom';

const Button = React.lazy(() => import('search/Button'));

export function App() {
  const [routes, setRoutes] = useState<RouteObject[]>([{path: '/*', element: <div>Loading...</div>}]);
  const Page = useRoutes(routes);

  useEffect(() => {
    async function loadRoutes() {
      const searchRoutes = import('search/routes')
      const ordersRoutes = import('orders/routes')

      const [search, orders] = await Promise.all([searchRoutes, ordersRoutes])

      setRoutes([...search.default, ...orders.default])
    }

    loadRoutes()
  }, [])
  return (
    <div>
      {routes.map(({path, element}) => <Link key={path} to={path as string}>{element}</Link>)}
      <Suspense fallback={<div>Loading...</div>}>
        {Page}
        <Button />
      </Suspense>
    </div>
  )
}

export default App;

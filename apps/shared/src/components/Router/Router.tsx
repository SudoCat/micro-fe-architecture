import React, { useState, useEffect } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom';

interface IRouterProps {
  hostApp: string
  defaultRoutes: RouteObject[]
}

const apps = ['search', 'orders']

export default function Router({ hostApp, defaultRoutes }: IRouterProps) {
  const [routes, setRoutes] = useState<RouteObject[]>(defaultRoutes);
  const Page = useRoutes(routes);

  useEffect(() => {
    async function loadRoutes() {
      // const routes = await Promise.all(apps.filter(app => app !== hostApp).map(app => import(`${app}/routes`)))

      // setRoutes([...defaultRoutes, ...routes.map(route => route.default)])

      const routes = await import('search/routes')

      setRoutes([...defaultRoutes, ...routes.default])
    }

    loadRoutes()
  }, [hostApp, defaultRoutes])

  return Page
}

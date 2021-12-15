import React, { useState, useEffect } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom';

import { loadRemoteModule, LoadRemoteModuleOptions } from '../../utils/federation-utils'

const apps : LoadRemoteModuleOptions[] = [
  {
    remoteEntry: 'http://localhost:3001/entry.js',
    remoteName: 'search',
    exposedModule: './routes'
  },
  {
    remoteEntry: 'http://localhost:3002/entry.js',
    remoteName: 'orders',
    exposedModule: './routes'
  }
]

interface IRouterProps {
  hostApp: string
  defaultRoutes: RouteObject[]
}

export default function Router({ hostApp, defaultRoutes }: IRouterProps) {
  const [routes, setRoutes] = useState<RouteObject[]>([...defaultRoutes, { path: '/*', element: <div>Loading...</div> }]);
  const Page = useRoutes(routes);

  useEffect(() => {
    async function loadRoutes() {
      const remoteRoutes = await Promise.all(apps.filter(app => app.remoteName !== hostApp).map(app => loadRemoteModule(app)))

      setRoutes(remoteRoutes.reduce((acc, curr) => acc.concat(...curr.default), [...defaultRoutes]))
    }

    loadRoutes()
  }, [hostApp, defaultRoutes])

  return Page
}


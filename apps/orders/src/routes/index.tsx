import React from "react"
import { RouteObject } from "react-router"

function LazyRoute({ Component }: { Component: React.ComponentType<any> }) {
  return <React.Suspense fallback={<p>loading</p>}><Component /></React.Suspense>
}

const routes: RouteObject[] = [
 {
    path: "/basket",
    element: <LazyRoute Component={React.lazy(() => import("./basket"))} />,
 }
]

export default routes

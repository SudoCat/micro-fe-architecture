import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link, useRoutes, RouteObject } from 'react-router-dom';

export default function Wrapper({ children } : React.PropsWithChildren<unknown>) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

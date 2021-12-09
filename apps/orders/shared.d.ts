/// <reference types="react" />
/// <reference types="react-router-dom" />

declare module "shared/Router" {
  interface IRouterProps {
    hostApp: string
    defaultRoutes: RouteObject[]
  }
  const Router: React.ComponentType<IRouterProps>;

  export default Router;
}

declare module "shared/Wrapper" {
  const Wrapper: React.ComponentType;

  export default Wrapper;
}

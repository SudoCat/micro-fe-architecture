/// <reference types="react" />
/// <reference types="react-router-dom" />

declare module "search/routes" {
  const routes: import("react-router-dom").RouteObject[];

  export default routes;
}

declare module "search/Button" {
  const Button: React.ComponentType;

  export default Button;
}

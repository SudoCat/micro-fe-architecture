import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RoutesProps {}

const StyledRoutes = styled.div`
  color: pink;
`;

export function Routes(props: RoutesProps) {
  return (
    <StyledRoutes>
      <h1>Welcome to Routes!</h1>
    </StyledRoutes>
  );
}

export default Routes;

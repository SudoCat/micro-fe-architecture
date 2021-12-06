import { render } from '@testing-library/react';

import Routes from './Routes';

describe('Routes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Routes />);
    expect(baseElement).toBeTruthy();
  });
});

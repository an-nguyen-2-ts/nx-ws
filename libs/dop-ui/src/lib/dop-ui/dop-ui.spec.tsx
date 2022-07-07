import { render } from '@testing-library/react';

import DopUi from './dop-ui';

describe('DopUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DopUi />);
    expect(baseElement).toBeTruthy();
  });
});

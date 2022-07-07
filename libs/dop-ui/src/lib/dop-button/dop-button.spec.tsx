import { render } from '@testing-library/react';

import DopButton from '.';

describe('DopButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DopButton />);
    expect(baseElement).toBeTruthy();
  });
});

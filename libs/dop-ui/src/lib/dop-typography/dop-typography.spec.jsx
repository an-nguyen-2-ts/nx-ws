import { render, screen } from '@testing-library/react';

import DopTypography from '.';

describe('DopTypography', () => {
  it('should render successfully', async () => {
    render(<DopTypography>hello</DopTypography>);
    expect(await screen.findByText(/hello/i)).toBeTruthy();
  });
});

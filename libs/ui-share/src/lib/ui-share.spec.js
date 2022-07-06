import { render } from '@testing-library/react';
import UiShare from './ui-share';
describe('UiShare', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiShare />);
    expect(baseElement).toBeTruthy();
  });
});

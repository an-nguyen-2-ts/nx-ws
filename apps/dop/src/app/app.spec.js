import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

describe('App', () => {
  it('render and should have a greeting as the title', async () => {
    const { findByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(await findByText(/Welcome dop/gi)).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // now it would crash, because app would request Fib.js, the latter would ask  would request Express reserver which is not running now
  // proper production experience would be to write a mock
});

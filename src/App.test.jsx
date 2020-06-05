import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

describe('App', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('renders successfully', () => {
    const { getByText, debug } = render(<App />);
    // debug();
    const incButton = getByText('Increment');
    expect(incButton.textContent).toMatch('Increment');
  });

  it('document body is empty', () => {
    console.log(document.body.innerHTML);
  });
});

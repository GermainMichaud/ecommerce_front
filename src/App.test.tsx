import { describe, expect, it } from 'vitest';

import App from './App';
import { renderWithRouter, screen } from './utils/test-utils';

describe('App component', () => {
  it('should render', () => {
    expect(typeof App).toBe('function');
    renderWithRouter(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ecommerce');
  });
});

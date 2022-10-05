import { describe, expect, it } from 'vitest';

import App from './App';
import { renderWithAllProviders, screen } from './utils/test-utils';

describe('App component', () => {
  it('should render', () => {
    expect(typeof App).toBe('function');
    renderWithAllProviders(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('E-Commerce');
  });
});

import { describe } from 'vitest';

import { renderWithStore } from '../utils/test-utils';
import ProductsPage from './ProductsPage';

describe('ProductsPage', () => {
  it('should render', () => {
    const { getByText } = renderWithStore(<ProductsPage />, {
      initialEntries: ['/products'],
    });
    expect(getByText('Products')).toBeInTheDocument();
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});

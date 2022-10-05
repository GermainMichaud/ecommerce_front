import { describe } from 'vitest';

import { mockUseMatch, renderWithAllProviders } from '../utils/test-utils';
import ProductPage from './ProductPage';

beforeAll(() => {
  mockUseMatch();
});

describe('ProductsPage', () => {
  it('should render', () => {
    const { getByText } = renderWithAllProviders(<ProductPage />, {
      initialEntries: ['/products/product-1-ko2BeweXYOqRhnOXmF55j'],
    });
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});

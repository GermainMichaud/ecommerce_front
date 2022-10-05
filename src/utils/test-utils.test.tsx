import { describe, expect, it } from 'vitest';

import {
  renderWithAllProviders,
  renderWithRouter,
  renderWithStore,
  user,
} from './test-utils';

describe('test-utils', () => {
  it('should render component with store', () => {
    expect(typeof renderWithStore).toBe('function');
    expect(renderWithStore(<div />)).toBeTruthy();
  });
  it('should render component with router', () => {
    expect(typeof renderWithRouter).toBe('function');
    expect(
      renderWithRouter(<div />, {
        initialEntries: ['/'],
      }),
    ).toBeTruthy();
  });
  it('should render component with all providers', () => {
    expect(typeof renderWithAllProviders).toBe('function');
    expect(renderWithAllProviders(<div />)).toBeTruthy();
  });
  it('should test userEvent click', () => {
    expect(user.click).toBeTruthy();
  });
});

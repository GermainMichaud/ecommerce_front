import { describe, expect, it } from 'vitest';

import { location, routes } from './routes';

describe('routes', () => {
  it('should be an array', () => {
    expect(Array.isArray(routes)).toBe(true);
  });
});

describe('location', () => {
  it('should return an object with default root values', () => {
    expect(location.current).toEqual({
      hash: '',
      href: '/',
      key: 'default',
      pathname: '/',
      search: {},
      searchStr: '',
    });
  });
});

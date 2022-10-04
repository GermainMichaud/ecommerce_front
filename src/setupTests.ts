import 'whatwg-fetch';

import matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';
import { expect } from 'vitest';

import { handlers } from './mocks/handlers';

expect.extend(matchers);

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

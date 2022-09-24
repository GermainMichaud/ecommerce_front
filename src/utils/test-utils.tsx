import { createMemoryHistory, ReactLocation, Router } from '@tanstack/react-location';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { routes } from '../routes';
import { createStore } from '../store';

const history = createMemoryHistory();
const location = new ReactLocation({ history });

export const renderWithStore = (
  ui: ReactElement,
  { store = createStore(), ...options },
) => ({
  store,
  ...render(ui, {
    wrapper: ({ children }): JSX.Element => <Provider store={store}>{children}</Provider>,
    ...options,
  }),
});

export const renderWithRouter = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Router location={location} routes={routes}>
        {children}
      </Router>
    ),
    ...options,
  });

export const renderWithAllProviders = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Provider store={createStore()}>
        <Router location={location} routes={routes}>
          {children}
        </Router>
      </Provider>
    ),
    ...options,
  });

export const user = userEvent.setup();

export * from '@testing-library/react';

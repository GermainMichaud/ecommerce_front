import { PreloadedState } from '@reduxjs/toolkit';
import { createMemoryHistory, ReactLocation, Router } from '@tanstack/react-location';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { vi } from 'vitest';

import { routes } from '../routes';
import { AppStore, RootState, setupStore } from '../store';

export const user = userEvent.setup();

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  initialEntries?: string[];
}

export const renderWithStore = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...options
  }: ExtendedRenderOptions = {} as ExtendedRenderOptions,
) => ({
  ...render(ui, {
    wrapper: ({ children }): JSX.Element => <Provider store={store}>{children}</Provider>,
    ...options,
  }),
});

export const renderWithRouter = (
  ui: ReactElement,
  { initialEntries = ['/'], options = {} },
) => {
  const history = createMemoryHistory({ initialEntries });
  const location = new ReactLocation({ history });
  return {
    ...render(ui, {
      wrapper: ({ children }) => (
        <Router location={location} routes={routes}>
          {children}
        </Router>
      ),
      ...options,
    }),
  };
};

export const renderWithAllProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    initialEntries = ['/'],
    ...options
  }: ExtendedRenderOptions = {} as ExtendedRenderOptions,
) => {
  const history = createMemoryHistory({ initialEntries });
  const location = new ReactLocation({ history });
  return {
    ...render(ui, {
      wrapper: ({ children }) => (
        <Provider store={store}>
          <Router location={location} routes={routes}>
            {children}
          </Router>
        </Provider>
      ),
      ...options,
    }),
  };
};

export const mockAppStore = () => {
  vi.mock('../store', async () => {
    const mockStore = await vi.importActual<typeof import('../store')>('../store');
    return {
      ...mockStore,
      useAppSelector: () => ({}),
    };
  });
};

export const mockUseMatch = () => {
  vi.mock('@tanstack/react-location', async () => {
    const mockRouter = await vi.importActual<typeof import('@tanstack/react-location')>(
      '@tanstack/react-location',
    );
    return {
      ...mockRouter,
      useMatch: () => ({ params: {} }),
    };
  });
};

export * from '@testing-library/react';

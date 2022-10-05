import './index.css';

import { Router } from '@tanstack/react-location';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { location, routes } from './routes';
import { store } from './store';

// if (import.meta.env.MODE === 'development') {
//   const { worker } = await import('./mocks/browser');
//   await worker.start();
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router
        location={location}
        routes={routes}
        defaultPendingElement={<div>Loading...</div>}
      >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);

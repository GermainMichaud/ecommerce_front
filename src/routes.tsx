import { MakeGenerics, Navigate, ReactLocation, Route } from '@tanstack/react-location';
import React from 'react';

import Spin from './components/Spin';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';

// eslint-disable-next-line @typescript-eslint/ban-types
export type LocationGenerics = MakeGenerics<{
  Params: {
    slug: string;
  };
}>;

export const location = new ReactLocation<LocationGenerics>();

export const routes: Route<LocationGenerics>[] = [
  {
    path: '/',
    pendingElement: <Spin full />,
    element: <Navigate to="/products" />,
  },
  {
    path: 'products',
    children: [
      {
        path: '/',
        pendingElement: <Spin full />,
        element: <ProductsPage />,
      },
      {
        path: ':slug',
        pendingElement: <Spin full />,
        element: <ProductPage />,
      },
    ],
  },
  {
    path: 'cart',
    children: [
      {
        path: '/',
        pendingElement: <Spin full />,
        element: <CartPage />,
      },
      {
        path: 'checkout',
        children: [
          {
            path: '/',
            pendingElement: <Spin full />,
            element: <CheckoutPage />,
          },
          {
            path: 'success',
            pendingElement: <Spin full />,
            element: <CheckoutSuccessPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    pendingElement: <Spin full />,
    element: <Navigate to="/products" />,
  },
];

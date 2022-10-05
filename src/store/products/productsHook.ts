import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../../interfaces';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/products',
      providesTags: (result) =>
        result ? result.map(({ _id }) => ({ type: 'Products' as const, id: _id })) : [],
    }),
    getProductBySlug: builder.query<IProduct, string>({
      query: (slug) => `/products/slug/${slug}`,
      providesTags: (result) => [{ type: 'Products' as const, id: result?._id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductBySlugQuery } = productsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IVariant, Order } from '../../interfaces';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  tagTypes: ['order'],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<
      Partial<Order>,
      { userInfos: Record<string, any>; items: Partial<IVariant>[] }
    >({
      query: (order) => ({
        url: '/orders',
        method: 'POST',
        body: order,
        credentials: 'include',
      }),
      providesTags: (result: { _id: string }) => [
        { type: 'order' as const, id: result?._id },
      ],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;

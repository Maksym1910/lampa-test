import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IProductsResponse } from '../model/types';

export const productApi = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProductsResponse, number>({
      query: (limit = 6) => ({
        url: '/products',
        params: {
          limit,
        },
      }),
    }),
  }),
});

export const {
  useFetchAllProductsQuery,
} = productApi;

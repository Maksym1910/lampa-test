import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IProductsResponse } from '../model/types';
import { transformResponse } from '../helpers/transformResponse';

export const productApi = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProductsResponse, number | void>({
      query: (limit = 20) => ({
        url: '/products',
        params: {
          limit,
          select: 'id,title,description,price,category',
        },
      }),
      transformResponse,
    }),
    fetchProductsByCategory: build.query<IProductsResponse, string | undefined>({
      query: (category = undefined) => ({
        url: `/products/category/${category}`,
        params: {
          select: 'id,title,description,price,category',
        },
      }),
      transformResponse,
    }),
  }),
});

export const {
  useFetchAllProductsQuery,
  useFetchProductsByCategoryQuery,
} = productApi;

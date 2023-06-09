import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ILoginData, ILoginResponse } from '../types/loginData';

export const loginApi = createApi({
  reducerPath: 'loginAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation<ILoginResponse, ILoginData>({
      query: (loginData) => ({
        url: '/auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
} = loginApi;

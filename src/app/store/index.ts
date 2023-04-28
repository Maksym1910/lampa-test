import { configureStore } from '@reduxjs/toolkit';
import { productApi } from 'entities/Product/api/productApi';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

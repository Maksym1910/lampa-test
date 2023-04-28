import { productApi } from 'entities/Product/api/productApi';
import { cartSlice } from 'features/Cart/store/cartSlice';

export const rootReducer = {
  [productApi.reducerPath]: productApi.reducer,
  cart: cartSlice.reducer,
};

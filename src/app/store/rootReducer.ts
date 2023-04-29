import { productApi } from 'entities/Product/api/productApi';
import { cartSlice } from 'features/Cart/store/cartSlice';
import { combineReducers } from '@reduxjs/toolkit';

interface RootState {
  [productApi.reducerPath]: ReturnType<typeof productApi.reducer>;
  cart: ReturnType<typeof cartSlice.reducer>;
}
export const rootReducer = combineReducers<RootState>({
  [productApi.reducerPath]: productApi.reducer,
  cart: cartSlice.reducer,
});

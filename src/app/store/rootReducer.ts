import { productApi } from 'entities/Product/api/productApi';
import { cartSlice } from 'features/Cart/store/cartSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { categoriesSlice } from 'features/CategoriesFilter';
import { loginApi } from 'features/LoginForm/api/loginApi';

interface RootState {
  [loginApi.reducerPath]: ReturnType<typeof loginApi.reducer>;
  [productApi.reducerPath]: ReturnType<typeof productApi.reducer>;
  cart: ReturnType<typeof cartSlice.reducer>;
  categories: ReturnType<typeof categoriesSlice.reducer>;
}
export const rootReducer = combineReducers<RootState>({
  [loginApi.reducerPath]: loginApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  cart: cartSlice.reducer,
  categories: categoriesSlice.reducer,
});

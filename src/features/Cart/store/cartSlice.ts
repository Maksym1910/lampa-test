import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'entities/Product/model/types';

interface ICartState {
  products: IProduct[]
}

const initialState: ICartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state: ICartState, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    addProductsToCart(state: ICartState, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
});

export const {
  addProductToCart,
  addProductsToCart,
} = cartSlice.actions;

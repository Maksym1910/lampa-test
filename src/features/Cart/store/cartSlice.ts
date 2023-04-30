import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'entities/Product';

interface ICartState {
  cartProducts: IProduct[]
  totalPrice: number
}

const initialState: ICartState = {
  cartProducts: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state: ICartState, action: PayloadAction<IProduct>) {
      state.cartProducts.push(action.payload);
    },
    deleteProductFromCart(state: ICartState, action: PayloadAction<IProduct>) {
      state.cartProducts = state.cartProducts.filter((product) => (
        product.id !== action.payload.id
      ));
    },
    addTotalPrice(state: ICartState, action: PayloadAction<number>) {
      state.totalPrice = action.payload;
    },
    increaseProductQuantity(state: ICartState, action: PayloadAction<IProduct>) {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id,
      );
      const updatedProduct = { ...action.payload, quantity: action.payload.quantity + 1 };
      state.cartProducts.splice(productIndex, 1, updatedProduct);
    },
    decreaseProductQuantity(state: ICartState, action: PayloadAction<IProduct>) {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id,
      );
      const updatedProduct = { ...action.payload, quantity: action.payload.quantity - 1 };
      state.cartProducts.splice(productIndex, 1, updatedProduct);
    },
  },
});

export const {
  addProductToCart,
  deleteProductFromCart,
  addTotalPrice,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

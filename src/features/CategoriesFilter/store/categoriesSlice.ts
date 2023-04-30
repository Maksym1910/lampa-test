import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'entities/Product';

interface ICategoriesFilterState {
  selectedCategory: string
  filteredProducts: IProduct[]
}

const initialState: ICategoriesFilterState = {
  selectedCategory: '',
  filteredProducts: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    addProductsToFilterList(state, action: PayloadAction<IProduct[]>) {
      state.filteredProducts = action.payload;
    },
    removeProductsFromFilterList(state) {
      state.filteredProducts = [];
    },
  },
});

export const {
  changeCategory,
  addProductsToFilterList,
  removeProductsFromFilterList,
} = categoriesSlice.actions;

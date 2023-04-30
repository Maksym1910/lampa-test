import { IProduct, IProductsResponse } from '../model/types';

export const transformResponse = (response: IProductsResponse) => ({
  ...response,
  products: response.products.map((product: IProduct) => ({
    ...product,
    quantity: 1,
  })),
});

import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/helpers/hooks/redux';
import { Button } from 'shared/components/Button';

import { IProduct } from 'entities/Product';

import { addProductToCart } from '../../store/cartSlice';

interface IAddToCartProps {
  product: IProduct,
}

export const AddToCart: React.FunctionComponent<IAddToCartProps> = (props) => {
  const dispatch = useAppDispatch();
  const { product } = props;
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);
  const isAddedToCart = cartProducts.some((cartProduct) => cartProduct.id === product.id);

  const handleAddToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  // console.log('render');

  return (
    <Button onClick={handleAddToCart} disabled={isAddedToCart}>
      <span>{isAddedToCart ? 'In a Cart' : 'Add to Cart'}</span>
    </Button>
  );
};

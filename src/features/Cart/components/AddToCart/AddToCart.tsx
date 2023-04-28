import React, { useLayoutEffect, useState } from 'react';

import { useAppDispatch } from 'shared/helpers/hooks/redux';
import { Button } from 'shared/components/Button';
import { getFromLocalStorage } from 'shared/helpers/getFromLocalStorage';

import { IProduct } from 'entities/Product/model/types';

import { addProductToCart } from '../../store/cartSlice';

interface IAddToCartProps {
  product: IProduct
}

export const AddToCart: React.FunctionComponent<IAddToCartProps> = (props) => {
  const dispatch = useAppDispatch();
  const { product } = props;
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useLayoutEffect(() => {
    const cartFromLocalStorage = getFromLocalStorage('cart', '[]');
    setIsAddedToCart(
      cartFromLocalStorage?.some(
        (cartProduct: IProduct) => cartProduct.id === product.id,
      ),
    );
  }, [product]);
  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
    const cartFromLocalStorage = getFromLocalStorage('cart', '[]');
    localStorage.setItem(
      'cart',
      JSON.stringify([...cartFromLocalStorage, product]),
    );
    setIsAddedToCart(true);
  };

  return (
    <Button onClick={handleAddToCart} disabled={isAddedToCart}>
      {isAddedToCart ? <span>In a Cart</span> : <span>Add to Cart</span>}
    </Button>
  );
};

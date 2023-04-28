import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/helpers/hooks/redux';
import { Button } from 'shared/components/Button';
import { getFromLocalStorage } from 'shared/helpers/getFromLocalStorage';

import { ProductCard } from 'entities/Product';
import { addProductsToCart } from 'features/Cart';

import styles from './styles.module.scss';

export const CartProductsList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);
  const cartProductsFromLocalStorage = getFromLocalStorage('cart', '[]');

  useEffect(() => {
    if (products.length === 0 && cartProductsFromLocalStorage) {
      dispatch(addProductsToCart(cartProductsFromLocalStorage));
    }
  }, [cartProductsFromLocalStorage, dispatch, products]);

  return (
    <ul className={styles.root}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          actions={<Button>Remove from Cart</Button>}
        />
      ))}
    </ul>
  );
};

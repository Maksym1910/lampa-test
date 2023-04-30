import React from 'react';

import { ProductCard } from 'entities/Product';
import { ChangeProductQuantity } from 'features/Cart';

import { useAppSelector } from 'shared/helpers/hooks/redux';

import styles from './CartProductsList.module.scss';

export const CartProductsList = () => {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const isCartEmpty = cartProducts.length === 0;

  return (
    <ul className={styles.root}>
      {isCartEmpty && <div>No products in a cart!</div>}
      {cartProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          actions={<ChangeProductQuantity product={product} />}
        />
      ))}
    </ul>
  );
};

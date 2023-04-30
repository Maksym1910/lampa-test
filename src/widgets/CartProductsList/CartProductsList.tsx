import React from 'react';

import { ProductCard } from 'entities/Product';
import { ChangeProductQuantity } from 'features/Cart';

import { useAppSelector } from 'shared/helpers/hooks/redux';

import styles from './CartProductsList.module.scss';

export const CartProductsList = () => {
  const { cartProducts } = useAppSelector((state) => state.cart);

  return (
    <ul className={styles.root}>
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

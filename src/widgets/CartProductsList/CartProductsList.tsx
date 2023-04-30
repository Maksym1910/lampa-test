import React from 'react';

import { ProductCard } from 'entities/Product';
import { ChangeProductQuantity, TotalCartPrice } from 'features/Cart';

import { useAppSelector } from 'shared/helpers/hooks/redux';

import styles from './CartProductsList.module.scss';

export const CartProductsList = () => {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const isCartEmpty = cartProducts.length === 0;

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {isCartEmpty && <div>No products in a cart!</div>}
        {cartProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            actions={<ChangeProductQuantity product={product} />}
          />
        ))}
      </ul>
      <TotalCartPrice label="Total:" className={styles.totalPrice} />
    </div>
  );
};

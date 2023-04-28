import React, { useEffect } from 'react';

import { ProductCard, useFetchAllProductsQuery } from 'entities/Product';
import { addProductsToCart, AddToCart } from 'features/Cart';

import { getFromLocalStorage } from 'shared/helpers/getFromLocalStorage';
import { useAppDispatch } from 'shared/helpers/hooks/redux';
import styles from './styles.module.scss';

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useFetchAllProductsQuery(6);

  useEffect(() => {
    const cartProducts = getFromLocalStorage('cart', '[]');
    dispatch(addProductsToCart(cartProducts));
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <ul className={styles.root}>
      {
        data?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            actions={<AddToCart product={product} />}
          />
        ))
      }
    </ul>
  );
};

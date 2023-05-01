import React, { useMemo } from 'react';

import { useAppSelector } from 'shared/helpers/hooks/redux';
import { Loader } from 'shared/components/Loader';

import { AddToCart } from 'features/Cart';
import {
  ProductCard,
  useFetchAllProductsQuery,
} from 'entities/Product';

import styles from './ProductsList.module.scss';

export const ProductsList: React.FunctionComponent = () => {
  const { data: allProducts, isLoading, isError } = useFetchAllProductsQuery();
  const { filteredProducts } = useAppSelector((state) => state.categories);
  const products = useMemo(() => {
    if (filteredProducts.length > 0) {
      return filteredProducts;
    }
    return allProducts?.products || [];
  }, [allProducts?.products, filteredProducts]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <ul className={styles.root}>
      {
        products.map((product) => (
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

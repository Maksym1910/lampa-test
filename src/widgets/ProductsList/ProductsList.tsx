import React from 'react';

import { useAppSelector } from 'shared/helpers/hooks/redux';
import { AddToCart } from 'features/Cart';
import {
  ProductCard,
  useFetchAllProductsQuery,
} from 'entities/Product';

import styles from './ProductsList.module.scss';

export const ProductsList: React.FunctionComponent = () => {
  const { data: allProducts, isLoading, isError } = useFetchAllProductsQuery();
  const { filteredProducts } = useAppSelector((state) => state.categories);
  const { selectedCategory } = useAppSelector((state) => state.categories);

  if (isLoading || (selectedCategory && filteredProducts.length === 0)) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <ul className={styles.root}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            actions={<AddToCart product={product} />}
          />
        ))
      ) : (
        allProducts?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            actions={<AddToCart product={product} />}
          />
        ))
      )}
    </ul>
  );
};

import React from 'react';

import { Header } from 'widgets/Header';
import { ProductsList } from 'widgets/ProductsList';
import { CategoriesBar } from 'features/CategoriesFilter';

import styles from './ProductsPage.module.scss';

export const ProductsPage = () => (
  <>
    <Header />
    <main className={styles.root}>
      <CategoriesBar />
      <ProductsList />
    </main>
  </>
);

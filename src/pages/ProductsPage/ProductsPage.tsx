import React from 'react';

import { Header } from 'widgets/Header';
import { ProductsList } from 'widgets/ProductsList';
import { CategoriesSidebar } from 'features/CategoriesFilter';

import styles from './ProductsPage.module.scss';

export const ProductsPage = () => (
  <>
    <Header />
    <main className={styles.root}>
      <CategoriesSidebar />
      <ProductsList />
    </main>
  </>
);

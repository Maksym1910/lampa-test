import React from 'react';

import { Header } from 'widgets/Header';
import { ProductsLayout } from 'widgets/ProductsLayout';
import { ProductsList } from 'widgets/ProductsList';

import { CategoriesBar } from 'features/CategoriesFilter';

export const ProductsPage = () => (
  <>
    <Header />
    <ProductsLayout>
      <CategoriesBar />
      <ProductsList />
    </ProductsLayout>
  </>
);

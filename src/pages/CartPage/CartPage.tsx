import React from 'react';

import { Header } from 'widgets/Header';
import { CartProductsList } from 'widgets/CartProductsList';

import { OrderForm } from 'features/OrderForm';

import styles from './CartPage.module.scss';

export const CartPage = () => (
  <>
    <Header />
    <div className={styles.root}>
      <CartProductsList />
      <OrderForm />
    </div>
  </>

);

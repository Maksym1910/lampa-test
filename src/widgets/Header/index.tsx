import React from 'react';

import { CartNavigationButton, TotalCartPrice } from 'features/Cart';

import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.root}>
    <div>Logo</div>
    <div className={styles.cart}>
      <TotalCartPrice />
      <CartNavigationButton />
    </div>
  </header>
);

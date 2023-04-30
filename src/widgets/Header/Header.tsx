import React from 'react';

import { CartNavigationButton, TotalCartPrice } from 'features/Cart';

import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.root}>
    <div>Logo</div>
    <div className={styles.cart}>
      <TotalCartPrice />
      <CartNavigationButton />
    </div>
  </header>
);

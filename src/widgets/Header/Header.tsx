import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CartNavigationButton, TotalCartPrice } from 'features/Cart';

import { Logo } from 'shared/components/Logo';
import styles from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogoClicked = () => {
    navigate('/products');
  };

  return (
    <header className={styles.root}>
      <Logo onClick={handleLogoClicked} />
      <section className={styles.cart}>
        <TotalCartPrice />
        <CartNavigationButton />
      </section>
    </header>
  );
};

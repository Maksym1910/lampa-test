import React from 'react';

import styles from './ProductsLayout.module.scss';

interface ICartLayoutProps {
  children: React.ReactNode
}

export const ProductsLayout: React.FunctionComponent<ICartLayoutProps> = ({ children }) => (
  <main className={styles.root}>{children}</main>
);

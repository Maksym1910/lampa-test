import React from 'react';

import styles from './CartLayout.module.scss';

interface ICartLayoutProps {
  children: React.ReactNode
}

export const CartLayout: React.FunctionComponent<ICartLayoutProps> = ({ children }) => (
  <main className={styles.root}>{children}</main>
);

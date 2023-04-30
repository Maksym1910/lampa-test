import React from 'react';

import { Title } from 'shared/components/Title';

import { IProduct } from '../../model/types';
import { formatPrice } from '../../helpers/formatPrice';

import styles from './ProductCard.module.scss';

interface IProductCardProps {
  product: IProduct
  actions: React.ReactNode
}
export const ProductCard: React.FunctionComponent<IProductCardProps> = (props) => {
  const { product, actions } = props;
  const formattedPrice = formatPrice(product.price);

  return (
    <li className={styles.root}>
      <div className={styles.content}>
        <Title>{product.title}</Title>
        <p className={styles.description}>{product.description}</p>
        <span className={styles.price}>{formattedPrice}</span>
      </div>
      <div className={styles.actions}>{actions}</div>
    </li>
  );
};

import React, { useEffect } from 'react';

import { IProduct } from 'entities/Product';
import { useAppDispatch } from 'shared/helpers/hooks/redux';

import {
  increaseProductQuantity,
  decreaseProductQuantity,
  deleteProductFromCart,
} from '../../store/cartSlice';

import styles from './ChangeProductQuantity.module.scss';

interface IChangeProductQuantityProps {
  product: IProduct
}

export const ChangeProductQuantity = (props: IChangeProductQuantityProps) => {
  const dispatch = useAppDispatch();
  const { product } = props;

  useEffect(() => {
    if (product.quantity === 0) {
      dispatch(deleteProductFromCart(product));
    }
  }, [dispatch, product]);

  const handleIncrease = () => {
    dispatch(increaseProductQuantity(product));
  };

  const handleDecrease = () => {
    dispatch(decreaseProductQuantity(product));
  };

  return (
    <div className={styles.root}>
      <button type="button" onClick={handleDecrease}>-</button>
      {product.quantity}
      <button type="button" onClick={handleIncrease}>+</button>
    </div>
  );
};

import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/helpers/hooks/redux';
import { formatPrice } from 'entities/Product';
import { addTotalPrice } from '../../store/cartSlice';

interface ITotalCartPriceProps {
  label?: string
  className?: string
}

export const TotalCartPrice: React.FunctionComponent<ITotalCartPriceProps> = (props) => {
  const dispatch = useAppDispatch();
  const { label = '', className } = props;
  const { cartProducts } = useAppSelector((state) => state.cart);
  const totalPrice = cartProducts.reduce(
    (value, cartProduct) => value + cartProduct.price * cartProduct.quantity,
    0,
  );
  const formattedPrice = formatPrice(totalPrice);

  useEffect(() => {
    dispatch(addTotalPrice(totalPrice));
  }, [dispatch, totalPrice]);

  return (
    <p className={className}>
      {totalPrice > 0 && <span>{`${label} ${formattedPrice}`}</span>}
    </p>
  );
};

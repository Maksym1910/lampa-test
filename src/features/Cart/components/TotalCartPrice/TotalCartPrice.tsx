import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'shared/helpers/hooks/redux';
import { formatPrice } from 'entities/Product';
import { addTotalPrice } from '../../store/cartSlice';

export const TotalCartPrice: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
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
    <span>
      {totalPrice === 0 ? '' : formattedPrice}
    </span>
  );
};

import React from 'react';

import { useAppSelector } from 'shared/helpers/hooks/redux';
import { priceFormatter } from 'entities/Product';

export const TotalCartPrice: React.FunctionComponent = () => {
  const { products: cartProducts } = useAppSelector((state) => state.cart);
  const totalPrice = cartProducts.reduce((value, cartProduct) => value + cartProduct.price, 0);
  const formattedPrice = priceFormatter(totalPrice);

  return (
    <span>
      {totalPrice === 0 ? '' : formattedPrice}
    </span>
  );
};

import React from 'react';

import { Header } from 'widgets/Header';
import { CartProductsList } from 'widgets/CartProductsList';
import { CartLayout } from 'widgets/CartLayout';

import { OrderForm } from 'features/OrderForm';

export const CartPage = () => (
  <>
    <Header />
    <CartLayout>
      <CartProductsList />
      <OrderForm />
    </CartLayout>
  </>
);

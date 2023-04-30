import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Form } from 'shared/components/Form';
import { FormInput } from 'shared/components/FormInput';
import { Button } from 'shared/components/Button';
import { Title } from 'shared/components/Title';
import { useAppSelector } from 'shared/helpers/hooks/redux';

import { getValidationSchema } from '../helpers/getValidationSchema';

interface IOrderData {
  name: string
  surname: string
  address: string
  phone: string
}

export const OrderForm: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderData>({
    mode: 'onChange',
    resolver: yupResolver(getValidationSchema()),
  });
  const { totalPrice } = useAppSelector((state) => state.cart);
  const { cartProducts } = useAppSelector((state) => state.cart);
  const isCartEmpty = cartProducts.length === 0;

  const handleOrderSubmit = useCallback((orderData: IOrderData) => {
    const message = `
      Dear, ${orderData.name} ${orderData.surname}
      Your order is submitted
      Address for delivery: ${orderData.address}
      Your contact: ${orderData.phone}
      
      Total Price: ${totalPrice}
    `;

    alert(message);
  }, [totalPrice]);

  return (
    <Form onSubmit={handleSubmit(handleOrderSubmit)}>
      <Title>Order</Title>
      <FormInput<IOrderData>
        type="text"
        name="name"
        register={register}
        errors={errors}
        placeholder="Name"
      />
      <FormInput<IOrderData>
        type="text"
        name="surname"
        register={register}
        errors={errors}
        placeholder="Surname"
      />
      <FormInput<IOrderData>
        type="text"
        name="address"
        register={register}
        errors={errors}
        placeholder="Address"
      />
      <FormInput<IOrderData>
        type="text"
        name="phone"
        register={register}
        errors={errors}
        placeholder="Phone"
      />
      <Button type="submit" disabled={isCartEmpty}>Order</Button>
    </Form>
  );
};

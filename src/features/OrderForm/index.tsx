import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Form } from 'shared/components/Form';
import { FormInput } from 'shared/components/FormInput';
import { Button } from 'shared/components/Button';
import { Title } from 'shared/components/Title';
import { useAppSelector } from 'shared/helpers/hooks/redux';

interface IOrderData {
  name: string
  surname: string
  address: string
  phone: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
});

export const OrderForm: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const { totalPrice } = useAppSelector((state) => state.cart);

  const handleOrderSumbit = useCallback(async (orderData: IOrderData) => {
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
    <Form onSubmit={handleSubmit(handleOrderSumbit)}>
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
      <Button type="submit">Order</Button>
    </Form>
  );
};

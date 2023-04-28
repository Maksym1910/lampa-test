import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput } from 'shared/components/FormInput';
import { Button } from 'shared/components/Button';
import { Form } from 'shared/components/Form';
import { Title } from 'shared/components/Title';

import { apiLoginRequest } from './api/apiLoginRequst';
import { ILoginData } from './types/loginData';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});
export const LoginForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleLogin = useCallback(async (formData: ILoginData) => {
    const { token } = await apiLoginRequest(formData);
    if (token) {
      localStorage.setItem('token', token);
      navigate('/products');
    }
  }, [navigate]);

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <Title>Login</Title>
      <FormInput<ILoginData>
        name="username"
        type="text"
        register={register}
        errors={errors}
        placeholder="Username"
      />
      <FormInput<ILoginData>
        name="password"
        type="password"
        register={register}
        errors={errors}
        placeholder="Password"
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};

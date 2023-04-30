import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput } from 'shared/components/FormInput';
import { Button } from 'shared/components/Button';
import { Form } from 'shared/components/Form';
import { Title } from 'shared/components/Title';
import { Loader } from 'shared/components/Loader';

import { ILoginData } from '../types/loginData';
import { getValidationSchema } from '../helpers/getValidationSchema';
import { useLoginMutation } from '../api/loginApi';

export const LoginForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [loginMutation, { isLoading, isError }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    mode: 'onChange',
    resolver: yupResolver(getValidationSchema()),
  });

  const handleLogin = useCallback(async (formData: ILoginData) => {
    const response = await loginMutation(formData);

    if ('data' in response) {
      const { data: { token } } = response;

      localStorage.setItem('token', token);
      navigate('/products');
    }
  }, [loginMutation, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

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

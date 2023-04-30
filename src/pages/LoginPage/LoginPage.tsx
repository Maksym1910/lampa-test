import React from 'react';

import { LoginForm } from 'features/LoginForm';
import { Layout } from 'shared/components/Layout';

export const LoginPage: React.FunctionComponent = () => (
  <Layout>
    <LoginForm />
  </Layout>
);

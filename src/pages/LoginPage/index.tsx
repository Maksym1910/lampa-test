import React from 'react';

import { LoginForm } from 'features/Login';
import { Layout } from 'shared/components/Layout';

const LoginPage: React.FunctionComponent = () => (
  <Layout>
    <LoginForm />
  </Layout>
);

export default LoginPage;

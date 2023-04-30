import React from 'react';

import { LoginForm } from 'features/LoginForm';
import { LoginLayout } from 'widgets/LoginLayout/LoginLayout';

export const LoginPage: React.FunctionComponent = () => (
  <LoginLayout>
    <LoginForm />
  </LoginLayout>
);

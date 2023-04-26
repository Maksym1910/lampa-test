import React from 'react';

import 'app/index.scss';

import { withProviders } from './providers';
import { AppRouter } from './router/AppRouter';

const App: React.FunctionComponent = () => (
  <AppRouter />
);

export default withProviders(App);

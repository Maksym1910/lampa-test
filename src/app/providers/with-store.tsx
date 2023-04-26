import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../store';

export const withStore = (WrappedComponent: React.FunctionComponent) => () => (
  <Provider store={store}>
    <WrappedComponent />
  </Provider>
);

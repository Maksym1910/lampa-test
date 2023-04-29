import React from 'react';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from '../store';

export const persistor = persistStore(store);

export const withPersistGate = (WrappedComponent: React.FunctionComponent) => () => (
  <PersistGate persistor={persistor}>
    <WrappedComponent />
  </PersistGate>
);

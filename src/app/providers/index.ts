import { compose } from '@reduxjs/toolkit';
import { withStore } from './withStore';
import { withRouter } from './withRouter';
import { withPersistGate } from './withPersistGate';
import { withSuspense } from './withSuspense';

export const withProviders = compose(
  withRouter,
  withSuspense,
  withStore,
  withPersistGate,
);

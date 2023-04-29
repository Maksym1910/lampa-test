import { compose } from '@reduxjs/toolkit';
import { withStore } from './withStore';
import { withRouter } from './withRouter';
import { withPersistGate } from './withPersistGate';

export const withProviders = compose(withRouter, withStore, withPersistGate);

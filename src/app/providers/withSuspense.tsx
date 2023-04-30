import React, { Suspense } from 'react';
import { Loader } from 'shared/components/Loader';

export const withSuspense = (WrappedComponent: React.FunctionComponent) => () => (
  <Suspense fallback={<Loader />}>
    <WrappedComponent />
  </Suspense>
);

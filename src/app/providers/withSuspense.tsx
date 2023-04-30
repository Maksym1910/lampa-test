import React, { Suspense } from 'react';

export const withSuspense = (WrappedComponent: React.FunctionComponent) => () => (
  <Suspense fallback={<div>Loading...</div>}>
    <WrappedComponent />
  </Suspense>
);

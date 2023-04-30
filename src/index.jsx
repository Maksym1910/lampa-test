import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'app/App';

const app = document.getElementById('app');
const root = createRoot(app);

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
);

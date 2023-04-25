import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'app/index.scss';
import App from 'app/App';

const app = document.getElementById('app');
const root = createRoot(app);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

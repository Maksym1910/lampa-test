import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import App from './App';

const app = document.getElementById('app');
const root = createRoot(app);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

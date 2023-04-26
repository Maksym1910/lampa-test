import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { withProviders } from './providers';

import 'app/index.scss';

const App: React.FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<div>Hello</div>} />
    <Route path="/cart" element={<div>Cart</div>} />
  </Routes>
);

export default withProviders(App);

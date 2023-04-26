import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Products from 'features/Products';
import Cart from 'features/Cart';

export const ProtectedRoutes = () => (
  <Routes>
    <Route path="/products" element={<Products />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<Navigate to="/products" replace />} />
  </Routes>
);

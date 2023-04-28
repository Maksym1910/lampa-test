import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ProductsPage from 'pages/ProductsPage';
import CartPage from 'pages/CartPage';

export const ProtectedRoutes: React.FunctionComponent = () => (
  <Routes>
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="*" element={<Navigate to="/products" replace />} />
  </Routes>
);

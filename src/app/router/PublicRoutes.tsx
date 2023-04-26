import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from 'features/Login';

export const PublicRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

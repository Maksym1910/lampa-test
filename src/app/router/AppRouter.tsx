import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getIsAuth } from 'shared/helpers/getIsAuth';

import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  const isAuth = getIsAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  if (isAuth) {
    return <ProtectedRoutes />;
  }

  return <PublicRoutes />;
};

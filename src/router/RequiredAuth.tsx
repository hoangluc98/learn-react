import React from 'react';
import { useAuth } from 'shared/hook/useAuth';
import { Outlet, Navigate } from 'react-router-dom';

const RequiredAuth = () => {
  const { auth } = useAuth();
  console.log('RequiredAuth', auth);

  return auth && auth.email ? <Outlet /> : <Navigate to="/" replace />;
};

export default RequiredAuth;

// src/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth }  from './AuthContext';

const PrivateRoute = ({ element: Component }) => {
  const { isAdmin } = useAuth();

  return isAdmin ? <Component /> : <Navigate to="/" />;  // Redirect to home if not admin
};

export default PrivateRoute;

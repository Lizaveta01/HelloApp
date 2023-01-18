import React from 'react';
import { Navigate } from 'react-router-dom';

type props = {
  user: boolean;
  redirectPath: string;
  children: React.ReactElement;
};

export const ProtectedRoute = ({ user, redirectPath, children }: props) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

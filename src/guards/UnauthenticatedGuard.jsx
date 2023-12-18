import React from 'react';
import useAuthenticated from 'src/hooks/useAuthenticated';
import { Navigate } from 'react-router-dom';
import { path } from 'src/constants/path';

export default function UnauthenticatedGuard({ children }) {
  const isAuthenticated = useAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={path.login} />;
  }

  return <>{children}</>;
}

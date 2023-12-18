import React from 'react';
import useAuthenticated from 'src/hooks/useAuthenticated';
import { Navigate } from 'react-router-dom';
import { path } from 'src/constants/path';

export default function AuthenticatedGuard({ children }) {
  const isAuthenticated = useAuthenticated();
  // const navigation = useNavigate();

  if (isAuthenticated) {
    // navigation(path.user);
    return <Navigate to={path.user} />;
  }

  return <>{children}</>;
}

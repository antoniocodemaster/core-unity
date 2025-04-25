import { Navigate } from 'react-router-dom';
import useAuthState from '../lib/states/AuthState';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { token } = useAuthState();
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

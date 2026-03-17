import useAuth from "../../hooks/useAuth";
import {Navigate, Outlet} from 'react-router-dom';
 

const ProtectedRoute = () => {
  const { data } = useAuth();

  if(!data?.token) return <Navigate to="/auth" replace />;
  
  return <Outlet />;
};


export default ProtectedRoute;

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/auth.context';

const PrivateRoute: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return;
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
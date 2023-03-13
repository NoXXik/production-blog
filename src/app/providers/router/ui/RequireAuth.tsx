import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const user = useSelector(getUserAuthData);
    const location = useLocation();

    if (!user) {
        return <Navigate to={RoutePath.main} state={{ from: location }} />;
    }
    return children;
};

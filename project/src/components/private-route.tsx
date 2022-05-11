import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.LoginPath} />;
}

export default PrivateRoute;

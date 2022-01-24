import { Navigate } from "react-router";
import { Route } from "react-router";
import { useAuth } from "../../contexts";
export function PrivateRoute({ path, ...props }) {
  const {
    authState: { login },
  } = useAuth();
  return login ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}

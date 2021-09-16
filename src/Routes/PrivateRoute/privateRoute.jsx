import { Navigate } from 'react-router';
import { useAuth } from '../../contexts/authProvider';
import { Route } from 'react-router';
export function PrivateRoute({path,...props}){
  const{ isUserLoggedIn}=useAuth()
    return isUserLoggedIn?<Route path={path}{...props}/>:<Navigate state={{from:path}} replace to='/login'/>
  }
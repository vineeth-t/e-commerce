import { Navigate } from 'react-router';
import { Route } from 'react-router';
export function PrivateRoute({path,...props}){
    const loginStatus=JSON.parse(localStorage?.getItem('login'))
    return loginStatus?.userLoginStatus?<Route path={path}{...props}/>:<Navigate state={{from:path}} replace to='/login'/>
  }
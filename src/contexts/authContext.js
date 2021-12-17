import { createContext, useContext, useReducer } from "react";
import {authReducer} from '../reducers/authReducer'
export const AuthContext=  createContext();
export function Auth({children}){
 let login;
 let userName='';
 const loginStatus= JSON.parse(localStorage.getItem('login'));
 if(loginStatus?.isUserLoggedIn){
     login=true;
     userName=loginStatus.userName
 }else{
     login=false
 }

    const[authState,authDispatch]=useReducer(authReducer, {
                                                      login,
                                                      userName,
                                                      password:''
                                                    })
          
 
  return <AuthContext.Provider value={{authState,authDispatch}}>
                {children}
        </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext)
}

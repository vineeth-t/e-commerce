import { createContext, useContext, useReducer } from "react";
import {authReducer} from '../reducers/authReducer'
export const AuthContext=  createContext();
export function Auth({children}){
 let login,userId,token;
 let userName='';
 const loginStatus= JSON.parse(localStorage.getItem('login'));
 if(loginStatus?.isUserLoggedIn){
     login=true
     userName=loginStatus.userName
     userId=loginStatus.userId
     token=loginStatus.token
 }else{
     login=false
 }

    const[authState,authDispatch]=useReducer(authReducer, {
                                                      userId,
                                                      login,
                                                      userName,
                                                      password:'',
                                                      token
                                                    })
          
 
  return <AuthContext.Provider value={{authState,authDispatch}}>
                {children}
        </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext)
}

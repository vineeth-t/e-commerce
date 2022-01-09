import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { logoutHandler } from "../components/axios/axios.loginSignUp";
import { setupAuthHeaderForServiceCalls,setupAuthExceptionHandler } from "../components/axios/axios.setup";
import {authReducer} from '../reducers/authReducer'
export const AuthContext=  createContext();
export function AuthProvider({children}){
    const navigate=useNavigate()
    const loginStatus= JSON.parse(localStorage.getItem('login'));
    let initalState;
    if(loginStatus?.isUserLoggedIn){
     initalState={
        login:true,
        userName:loginStatus.username,
        password:'',
        token:loginStatus.authToken
      }
      setupAuthHeaderForServiceCalls(loginStatus.authToken);
      
    }else{
        initalState={
            login:false,
            userName:'',
            password:'',
            token:''
          }
    }
    useEffect(() => {
		setupAuthExceptionHandler(logoutHandler, navigate,authDispatch);
	}, [navigate]);
    const[authState,authDispatch]=useReducer(authReducer, initalState)
  return <AuthContext.Provider value={{authState,authDispatch}}>
                {children}
        </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext)
}

import { createContext, useContext, useReducer } from "react";
import { fakeAuthApI } from "../api/authApi";
import {loginReducer} from '../reducers/loginReducer'
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

    const[authState,authDispatch]=useReducer(loginReducer, {
                                                      login,
                                                      userName,
                                                      password:''
                                                    })
          
  async function loginWithUserCredentials(state,userName,password,navigate){
                 try{
                  const response= await fakeAuthApI(userName,password);
                   if(response?.userLoginStatus){
                        authDispatch({type:'LOGIN',payload:userName})
                        localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:userName}))
                        navigate(state?.from?state.from:'/profile')
                              }
                    }catch(error){
                            alert('In valid Credentials')
                             navigate('/login')
       }
    }
  return <AuthContext.Provider value={{authState,authDispatch,loginWithUserCredentials}}>
                {children}
        </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext)
}

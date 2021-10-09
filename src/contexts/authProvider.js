import { createContext, useContext, useEffect, useReducer } from "react";
import { fakeAuthApI } from "../api/authApi";
import {loginReducer} from '../reducers/loginReducer'
export const AuthContext=  createContext();

export function Auth({children}){
  useEffect(()=>{
   const loginStatus=JSON.parse(localStorage.getItem('login'))
   if(loginStatus?.isUserLoggedIn){
    authDispatch({type:'LOGIN',payload:loginStatus.userName})
   }
  },[])
    const[authState,authDispatch]=useReducer(loginReducer, {
                                                      login:false,
                                                      userName:'',
                                                      password:''
                                                    })
  
                  
  async function loginWithUserCredentials(state,userName,password,navigate){
                 try{
                  const response= await fakeAuthApI(userName,password);
                   if(response?.userLoginStatus){
                     console.log('hello')
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
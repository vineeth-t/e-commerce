import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { fakeAuthApI } from "../api/authApi";
export const AuthContext=  createContext();
export function Auth({children}){
  const[isUserLoggedIn,setLogin]=useState(false);
  const navigate=useNavigate()
 async function loginWithUserCredentials(userName,password,state){
     try{
     const response= await fakeAuthApI(userName,password);
     if(response.userLoggedIn){
       setLogin(true)
       state?.from?navigate(state.from): navigate('/')
     }
     }catch(error){
      console.log(error)
     }
  }

  return <AuthContext.Provider value={{isUserLoggedIn,loginWithUserCredentials}}>
                {children}
        </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext)
}
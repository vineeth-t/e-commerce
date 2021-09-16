import { createContext, useContext, useState } from "react";
import { fakeAuthApI } from "../api/authApi";
export const AuthContext=  createContext();
export function Auth({children}){
  const[isUserLoggedIn,setLogin]=useState(false);
 async function loginWithUserCredentials(userName,password){
     try{
     const response= await fakeAuthApI(userName,password);
     console.log("response",{response})
     if(response.userLoggedIn){
       setLogin(true)
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
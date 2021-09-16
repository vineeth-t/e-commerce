import { createContext, useContext, useState } from "react";
export const AuthContext=  createContext();

export const Users={
  userName:'god',
  password:'tanay'
}
export function Auth({children}){
  const[isUserLoggedIn,setLogin]=useState(false);
  function loginWithUserCredentials(userName,password){
     if(userName===Users.userName&&password===Users.password){
      setLogin(true)
     }
  }

  return <AuthContext.Provider value={{isUserLoggedIn,loginWithUserCredentials}}>
                {children}
        </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext)
}
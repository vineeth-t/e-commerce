import { createContext, useContext, useState } from "react";
export const AuthContext=  createContext();
export function Auth({children}){
  const[isUserLoggedIn,setLogin]=useState(false);
  return <AuthContext.Provider value={{isUserLoggedIn,setLogin}}>
                {children}
        </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext)
}
import { createContext, useContext } from "react";
import { useNavigate } from "react-router";
import { fakeAuthApI } from "../api/authApi";
export const AuthContext=  createContext();

export function Auth({children}){
//   const[isUserLoggedIn,setLogin]=useState(false);
  const navigate=useNavigate()
  async function loginWithUserCredentials(userName,password,state){
     console.log(state)
     try{
     const response= await fakeAuthApI(userName,password);
     console.log(response)
     if(response.userLoginStatus){
        //setLogin(true)
        localStorage?.setItem('login',JSON.stringify({userLoginStatus:true}))
        state?.from?navigate(state.from): navigate('/')
     }
     }catch(error){
      console.log(error)
     }
  }

  return <AuthContext.Provider value={{loginWithUserCredentials}}>
                {children}
        </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext)
}
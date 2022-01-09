import axios from "axios";
import { API, setupAuthHeaderForServiceCalls } from "./axios.setup";

export async function signUpHandler(e,navigate,formChecker,formState,errorDispatch,authDispatch,dispatch){
    e.preventDefault();
    if(formChecker(formState,errorDispatch)) {
        const {data:{response,message,token}}=await axios.post(`${API}/signUp`,{firstname:formState.fname,lastname:formState.lname,username:formState.emailId,
        password:formState.password}) 
        if(response){
            localStorage?.setItem('login',JSON.stringify({
                                                isUserLoggedIn:true,
                                                username:formState.fname,
                                                authToken:token
                                              }))
            authDispatch({type:'LOGIN',payload:{fname:formState.fname,token:token}})
            setupAuthHeaderForServiceCalls(token);
            navigate('/profile')
        }else{
          dispatch({type:'TOAST',toast:message})
        }
            
    }                             
  }
  export async function loginHandler(event,loginDetails,dispatch){
      event.preventDefault ();
      const{state,userName,password,authDispatch,navigate}=loginDetails
      try{
        if(userName==='' || password===''){
          dispatch({type:'TOAST',toast:'Login Details Required'})
        }else{
          const {data:{response,fname,message,token}}=await axios.post(`${API}/login`,{username:userName,password:password})
          console.log({response,fname,message,token})
          if(response){
              localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,
                                                            username:fname,
                                                            authToken:token}))
              authDispatch({type:'LOGIN',payload:{fname,token}})
              setupAuthHeaderForServiceCalls(token);
              navigate(state?.from?state.from:'/profile')
          }else{
            dispatch({type:'TOAST',toast:message})
          }
        }
     
      }catch(error){
          console.log("This is Error",error)
         dispatch({type:'TOAST',toast:error.message})
      }
    
  }

  export function logoutHandler(authDispatch){
    localStorage.removeItem('login')
    //to remove authorization token 
    setupAuthHeaderForServiceCalls();
    authDispatch({type:'LOGOUT'})
}
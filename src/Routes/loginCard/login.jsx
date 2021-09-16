import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/authProvider'
import './loginCard.css'
export function Login(){
    const{loginWithUserCredentials}=useAuth();
    const[userName,setUserName]=useState();
    const[password,setPassword]=useState();
    const {state}=useLocation();
    function loginHandler(event,userName,password){
        event.preventDefault();
        loginWithUserCredentials(userName,password,state)
    }
    return(
        <>
            <form className='loginCard' onSubmit={(event)=>loginHandler(event,userName,password)}>
                <div >
                    <label> UserName : </label>
                    <input type='text' onChange={(event)=>setUserName(event.target.value)}/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password' onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button className='btn-logIn'>LogIn</button>
            </form>
        </>
    )
}
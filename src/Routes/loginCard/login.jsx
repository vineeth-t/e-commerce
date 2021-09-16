import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/authProvider'
import './loginCard.css'
export function Login(){
    const{loginWithUserCredentials,loginStatus}=useAuth();
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate()
    const {state}=useLocation();

    function loginHandler(event,userName,password,state){
            event.preventDefault();
            loginWithUserCredentials(userName,password,state)
             
    }
    function logoutHandler(){
        localStorage.removeItem('login')
        navigate('/login')
    }
    return(
        <>{loginStatus?.userLoginStatus?<div>
            <button className='btn-logIn' onClick={logoutHandler}>Logout</button>
        </div>:
            <form className='loginCard' onSubmit={(event)=>loginHandler(event,userName,password,state)}>
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
        }
        </>
    )
}
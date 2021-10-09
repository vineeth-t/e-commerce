import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts';
import { Profile } from '../../Routes';
import './loginCard.css'
export function Login(){
    const{authState:{login,userName,password},authDispatch, loginWithUserCredentials}=useAuth();
    const {state}=useLocation();
    const navigate=useNavigate();

    function loginHandler(event,state,userName,password,navigate){
        event.preventDefault () 
        loginWithUserCredentials(state,userName,password,navigate);
    }
    return(
        
        <>
        {login?<Profile/>:
            <form className='loginCard' onSubmit={(event)=>loginHandler(event,state,userName,password,navigate)}>
                <div >
                    <label> UserName : </label>
                    <input type='text' onChange={(event)=>authDispatch({type:'SET-USER-NAME',payload:event.target.value})}/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password' onChange={(event)=>authDispatch({type:'SET-PASSWORD',payload:event.target.value})}/>
                </div>
                <button className='btn-logIn'>LogIn</button>
                <div >
                New user?
                <Link to='/signUp'>
                     <span className='signUp'>SignUp</span>
                </Link>
            </div>
            </form>
}
        </>
    )
}
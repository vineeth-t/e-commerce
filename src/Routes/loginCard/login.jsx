import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/authProvider'
import './loginCard.css'
export function Login(){
    const{isUserLoggedIn,setLogin}=useAuth();
    const navigate=useNavigate()
    function loginHandler(event,setLogin){
        event.preventDefault();
        setLogin(true)
        navigate('/')
    }
    return(
        <>
        
            <form className='loginCard' onSubmit={(event)=>loginHandler(event,setLogin)}>
                <div >
                    <label> UserName : </label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password'/>
                </div>
                <button className='btn-logIn'>LogIn</button>
            </form>
        </>
    )
}
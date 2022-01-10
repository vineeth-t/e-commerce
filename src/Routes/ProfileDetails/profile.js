import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router"
import { NavLink } from "react-router-dom";
import { logoutHandler } from '../../components/axios/axios.loginSignUp'
import { API } from "../../components/axios/axios.setup";
import { useAuth } from "../../contexts"
import './profile.css'
export function Profile(){
    const{authDispatch}=useAuth();
    const navigate=useNavigate();
    return(
            <div>
                <ul className='li profile-li'>
                    <li >
                        <NavLink to='/personalDetails'>Personal Details</NavLink>
                    </li>
                    <li>
                        <NavLink to='/addresses'>
                            Address
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to='/cart'> 
                    Orders
                    </NavLink>
                    </li>
                </ul>
                <div>
                    <button className='btn logout' onClick={()=>logoutHandler(authDispatch,navigate)}>Logout</button>
                </div>             
            </div>
       )

}


export function PersonalDetails(){
    const{authState:{name,emailId},authDispatch}=useAuth();
    useEffect(()=>{
        (async()=>{
               const {data:{response,firstname,lastname,username}}= await axios.get(`${API}/user`) ;
              if(response){
                  authDispatch({type:'SET_USER_DETAILS',payload:{firstname,lastname,username}})
              }
        })()
    },[authDispatch])
    return(
        <div className='profile' >
            <Profile />
            <section className="user-details" >
            <div className="section-fields">
                <label >UserName : </label>
                <span>{name}</span><br/>
            </div>
            <div className="section-fields">
                <label >EmailId : </label>
                <span>{emailId}</span>
            </div>
        </section>
        </div>

        
    )

}
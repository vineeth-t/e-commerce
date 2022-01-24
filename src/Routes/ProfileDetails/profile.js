import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router"
import { NavLink } from "react-router-dom";
import { logoutHandler } from '../../components/axios/axios.loginSignUp'
import { API } from "../../components/axios/axios.setup";
import { useAuth } from "../../contexts"
import './profile.css'
export function Profile() {
    const { authDispatch } = useAuth();
    const navigate = useNavigate();
    return (
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
                <li>
                    <button className='btn-logout-mobile-only' onClick={() => logoutHandler(authDispatch, navigate)}>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z" fill="currentColor"></path></svg>
                    </button>
                </li>

            </ul>
            <div>
                <button className='btn logout' onClick={() => logoutHandler(authDispatch, navigate)}>Logout</button>
            </div>
        </div>
    )

}


export function PersonalDetails() {
    const { authState: { name, emailId }, authDispatch } = useAuth();
    useEffect(() => {
        (async () => {
            const { data: { response, firstname, lastname, username } } = await axios.get(`${API}/user`);
            if (response) {
                authDispatch({ type: 'SET_USER_DETAILS', payload: { firstname, lastname, username } })
            }
        })()
    }, [authDispatch])
    return (
        <div className='profile' >
            <Profile />
            <section className="user-details" >
                <div className="section-fields">
                    <label >UserName : </label>
                    <span>{name}</span><br />
                </div>
                <div className="section-fields">
                    <label >EmailId : </label>
                    <span>{emailId}</span>
                </div>
            </section>
        </div>


    )

}
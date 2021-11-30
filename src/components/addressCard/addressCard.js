import { useState } from 'react';
import { useStateContext } from '../../contexts/state-context';

import './addressCard.css'
import { AddressForm } from './addressForm';
export function AddressCard({setAddress}){
    const{state:{currentAddress}}=useStateContext();
    const{houseNo,streetName,landmark,city,district,pincode}=currentAddress
    console.log({houseNo,streetName,landmark,city,district,pincode})
    return <div className='address-container'>  
        <small className='address-details'>
            <h6>Deliver To:</h6> Alex carey <br/>
            <small>{houseNo}, {streetName}, {landmark}, {city},{pincode}</small>
          </small>
          <button className='btn-edit-address' onClick={()=>setAddress(true)}>
          <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M14 11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1zM3 7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm7 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1zm8.01-2.13l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71l-2.12-2.12zm-.71.71l-5.16 5.16c-.09.09-.14.21-.14.35v1.41c0 .28.22.5.5.5h1.41c.13 0 .26-.05.35-.15l5.16-5.16l-2.12-2.11z" fill="currentColor"></path></svg>
          </button>
         </div>
   
}

export function AdressModal({setAddress}){
    const{state:{address},dispatch}=useStateContext();
    const[openAddressForm,setAddressForm]=useState(false)
    return(
    <div className='address-modal'>
         <h2>Delivery Address </h2>
         {openAddressForm?<AddressForm setAddressForm={setAddressForm}/>:<ul className='address-list'>       
            {address?.map(({houseNo,streetName,landmark,city,district,pincode})=>{
                        return <div className='addresses'>
                                    <input type='radio' name='radio' onClick={()=>{setAddress(false);dispatch({type:'CURRENT_ADDRESS',payload:{houseNo,streetName,landmark,city,district,pincode}})}}/>
                                <span className='address-li'>
                                    <li >
                                        <p>{houseNo}</p>
                                        <p>{streetName}</p>
                                        <p>{landmark}</p>
                                        <p>{city},{district},{pincode}</p>
                                    </li>
                                    </span>
                                </div>
                    })}
                <button className='btn' onClick={()=>setAddressForm(true)}>Add Address</button>
          </ul>}
          <svg className='address-modal-close' onClick={()=>setAddress(false)} width="1.5em" height="2em" viewBox="0 0 24 24">
                    <g fill="none">
                        <path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586L6.225 4.81z" fill="currentColor"></path>
                    </g>
          </svg>
    </div>)
}
import { useReducer } from 'react';
import { useStateContext } from '../../contexts/state-context';
import { addressErrorHandlerReducer, addressreducer } from '../../reducers/addressReducer';
import { addressHandler } from '../axios';
export function AddressForm({setAddressForm}){
const [error,dispatchError]=useReducer(addressErrorHandlerReducer,{});
const{dispatch}=useStateContext();
const [addressDetails, addressDispatch] = useReducer(addressreducer, {
    name:"",
    houseNo: "",
    streetName: "",
    landmark: "",
    city: "",
    district: "",
    pincode:''
  });
function clearingError(type){
    dispatchError({type,payload:''})
}
    return <form className='address-form' onSubmit={(e)=>{addressHandler(e,addressDetails,dispatch,dispatchError,setAddressForm)}}>
                <h3>Add New Address</h3><br/>
                <div className='address-fields'> 
                    <label>Name - </label>
                    <input type='text' onChange={(event) =>
                          addressDispatch({
                            type: "SET_NAME",
                            payload: event.target.value
                          })}
                          onFocus={()=>clearingError('SET_NO_NAME_ERR')}
                          />
                        <span style={{display:error.houseNo?"flex":'none'}} className='alert-msg' >
                            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                                {error.name}
                      </span>
                </div>
                <div className='address-fields'> 
                    <label>House No - </label>
                    <input type='text' onChange={(event) =>
                          addressDispatch({
                            type: "SET_HOUSE_NO",
                            payload: event.target.value
                          })}
                          onFocus={()=>clearingError('SET_HOUSE_NO_ERR')}
                          />
                        <span style={{display:error.houseNo?"flex":'none'}} className='alert-msg' >
                            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                                {error.houseNo}
                      </span>
                </div>
                <div className='address-fields'>
                    <label>Street Name - </label>
                    <input type='text' onChange={(event) =>
                          addressDispatch({
                            type: "SET_STREET_NAME",
                            payload: event.target.value
                          })}
                          onFocus={()=>clearingError('SET_STREET_NAME_ERR')}
                          />
                          <span style={{display:error.streetName?"flex":'none'}} className='alert-msg' >
                            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                        {error.streetName}
                      </span>
                </div>
                <div className='address-fields'>
                    <label>Landmark - </label>
                    <input type='text'onChange={(event) =>
                          addressDispatch({
                            type: "SET_LANDMARK_NAME",
                            payload: event.target.value
                          })}
                          onFocus={()=>clearingError('SET_PINCODE_ERR')}
                    />
                          <span style={{display:error.landmark?"flex":'none'}} className='alert-msg' >
                            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                        {error.landmark}
                      </span>
                          
                </div>
                <div className='address-fields'>
                    <label>City</label>
                    <input type='text' onChange={(event) =>
                          addressDispatch({
                            type: "SET_CITY_NAME",
                            payload: event.target.value
                          })}
                          onFocus={()=>clearingError('SET_CITY_ERR')}
                    />
                          <span style={{display:error.city?"flex":'none'}} className='alert-msg' >
                            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                        {error.city}, {error.district}, {error.pincode}
                      </span>
                    <label>District</label>
                    <input type='text' onChange={(event) =>
                          addressDispatch({
                            type: "SET_DISTRICT_NAME",
                            payload: event.target.value
                          })}
                          onFocus={()=>clearingError('SET_DISTRICT_ERR')} />
                    <label>Pincode</label>
                    <input type='number'onChange={(event) =>
                          addressDispatch({
                            type: "SET_PINCODE",
                            payload: event.target.value
                          })}
                          onFocus={()=>clearingError('SET_LANDMARK_ERR')} />
                </div>
                <button className='btn' type='submit'>Submit</button>
                <button className='btn' onClick={()=> setAddressForm(false)} type='button'>Cancel</button>
            </form>
      } 


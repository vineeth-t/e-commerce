import axios from "axios"
import { addressErrorHandler } from "../../reducers/addressReducer";
import { API } from "./axios.setup";

export async function addressHandler(e,addressDetails,dispatch,dispatchError,setAddressForm){
    e.preventDefault();
    try{
        if(addressErrorHandler(addressDetails,dispatchError)){
            const {data:{response,addresses}}= await axios.post(`${API}/address`,addressDetails) ;
              if(response){
                    dispatch({type:'ADD_ADDRESS_DETAILS',payload:addresses})
                   }
            setAddressForm(false)
        }
    }catch(error){
        console.log(error)
        dispatch({type:'TOAST',error:'something went wrong'})
    }

  }
  export async function deleteAddressById(id,dispatch){

    try{    
        const {data:{response,addresses}}= await axios.delete(`${API}/address/${id}`) ;
        if(response){
                dispatch({type:'ADD_ADDRESS_DETAILS',payload:addresses})
         }}
        catch(error){
                console.log(error)
                dispatch({type:'TOAST',error:'something went wrong'})
            }
  }

  export async function getAddressOfUser(dispatch){
    const {data:{response,addresses}}= await axios.get(`${API}/address`) ;
    if(response){
     dispatch({type:'ADD_ADDRESS_DETAILS',payload:addresses})
    }
  }
 
export function addressreducer(state, { type, payload }) {
  switch(type){
    case 'SET_NAME':
        return {...state,name:payload}
    case 'SET_HOUSE_NO':
        return {...state,houseNo:payload}
    case 'SET_STREET_NAME':
          return {...state,streetName:payload}
    case'SET_LANDMARK_NAME':
          return {...state,landmark:payload}
    case'SET_CITY_NAME':
          return {...state,city:payload}
    case 'SET_DISTRICT_NAME':
          return {...state,district:payload}
    case 'SET_PINCODE':
            return {...state,pincode:payload}
    default:
      return state
  }
    
  }
export function addressErrorHandler(addressDetails,dispatchError){
  const {name, houseNo,streetName,landmark,city,district,pincode } = addressDetails;
  console.log(addressDetails)
  let flag=true;
  if(name===''){
    dispatchError({type:'SET_NO_NAME_ERR',payload:'Name Required'})
    flag=false
  }
  if(houseNo===''){
    dispatchError({type:'SET_HOUSE_NO_ERR',payload:'House No Required'})
    flag=false
  } if(streetName===''){
    dispatchError({type:'SET_STREET_NAME_ERR',payload:'Street Name Required'})
    flag=false
  }
  if(landmark===''){
    dispatchError({type:'SET_LANDMARK_ERR',payload:'Landmark Required'})
    flag=false;
  } 
   if(city===''){
    dispatchError({type:'SET_CITY_ERR',payload:'City Required'})
    flag=false
  } if(district===''){
    dispatchError({type:'SET_DISTRICT_ERR',payload:'District Required'})
    flag=false
  }if(pincode===''){
    dispatchError({type:'SET_PINCODE_ERR',payload:'Pincode Required'})
    flag=false
  } 
  return flag;

}
export function addressErrorHandlerReducer(state, { type, payload }){
  switch(type){
    case 'SET_NO_NAME_ERR':
        return {...state,name:payload}
    case 'SET_HOUSE_NO_ERR':
        return {...state,houseNo:payload}
    case 'SET_STREET_NAME_ERR':
          return {...state,streetName:payload}
    case'SET_PINCODE_ERR':
          return {...state,landmark:payload}
    case'SET_DISTRICT_ERR':
          return {...state,city:payload}
    case 'SET_CITY_ERR':
          return {...state,district:payload}
    case 'SET_LANDMARK_ERR':
            return {...state,pincode:payload}
    default:
      return state
  }
    
}

export function addressHandler(e,addressDetails,dispatch,dispatchError,setAddressForm){
  e.preventDefault();
  if(addressErrorHandler(addressDetails,dispatchError)){
      dispatch({type:'ADD_ADDRESS_DETAILS',payload:addressDetails});
      setAddressForm(false)
  }
}
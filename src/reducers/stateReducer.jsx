export function stateReducer(state,{type,payload,toast}){
    switch(type){
        case 'SET_PRODUCTS':
            return {...state,products:payload,toast:toast}
        case 'SET_WISHLIST':
                return{...state,wishListItems:payload,toast:toast}
        case 'SET_CART_ITEMS':
            return{...state,cartItems:payload,toast:toast}
        case 'ADD_ADDRESS_DETAILS':
            return{...state,address_details:payload,note:''}
        case 'CURRENT_ADDRESS':
            return{...state,currentAddress:payload,note:''}
        case 'TOAST':
            return{...state,toast:toast}
        case 'REMOVE_TOAST':
            return{
                ...state,toast:''
            }
        
        default: return state
    }

}
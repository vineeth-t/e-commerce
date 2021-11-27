export function stateReducer(state,action){
    switch(action.type){
        case 'SET_PRODUCTS':
            return {...state,products:action.payload,toast:action.toast}
        case 'SET_WISHLIST':
                return{...state,wishListItems:action.payload,toast:action.toast}
        case 'SET_CART_ITEMS':
            return{...state,cartItems:action.payload,toast:action.toast}

        case 'REMOVE_TOAST':
            return{
                ...state,toast:''
            }
        
        default: return state
    }

}
export function stateReducer(state,action){
    switch(action.type){
        case 'SET_PRODUCTS':
            return {...state,products:action.payload}
        case 'SET_WISHLIST':
                return{...state,wishListItems:action.payload}
        case 'Increment':
            return {...state,
                        cartItems:
                            state.cartItems.map(
                                    (item)=>item.id===action.productID?
                                    ({...item,quantity: item.quantity + 1}):item)}
        case 'Decrement':
            if(state.cartItems.some((item)=>item.quantity<=1)){
                return {
                    ...state,cartItems:state.cartItems.filter((item)=>item.id!==action.productID),toast:'removedFromCart'
                }
            }
            return {...state,
                cartItems:
                    state.cartItems.map(
                            (item)=>item.id===action.productID?
                            ({...item,quantity: item.quantity - 1}):item)}
        case 'Add2Cart':
            return {
                ...state,
                cartItems: [...state.cartItems, action.product],toast:'addtoCart'
              };
        case 'removeProductFromwishlist':
                    return {
                        ...state,
                        wishListItems: state.wishListItems.filter((item)=>item.id!==action.product.id),toast:'removedFromWislist'
                      };
        case 'removeToast':
            return{
                ...state,toast:''
            }
        case 'Move2Wishlist':
                console.log(action.product)
                if(state.wishListItems.some((item)=>item.id===action.product.id)){
                    return{...state,toast:'alreadyInWishlist'}
                }
                return{
              
                    ...state,cartItems:state.cartItems.filter((item)=>item.id!==action.product.id),wishListItems:[...state.wishListItems, action.product],toast:'addtoWislist'
                }
            default: return state
    }

}
export function stateReducer(state,action){
    switch(action.type){
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
        case 'Add2Wishlist':
                return {
                    ...state,
                    wishListItems: [...state.wishListItems, action.product],toast:'addtoWislist'
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
                if(state.wishListItems.some((item)=>item.id===action.product.id)){
                    return{...state,toast:'alreadyInWishlist'}
                }
                return{
                    ...state,wishListItems:[...state.wishListItems, action.product],toast:'addtoWislist'
                }
            default: return state
    }

}
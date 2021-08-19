import { cartItems,wishListItems } from "../contexts/state-context";
export function stateReducer(state,action){
    switch(action.type){
        case 'Increment':
            return {...state,quantity:state.quantity+1}
        case 'Decrement':
            return {...state,quantity:state.quantity-1}
        case 'Add2Cart':
            return {
                ...state,
                cartItems: [...cartItems, action.product]
              };
        case 'Add2Wishlist':
                return {
                    ...state,
                    wishListItems: [...wishListItems, action.product]
                  };
        case 'deleteProduct':
                    return {
                        ...state,
                        wishListItems: state.wishListItems.filter((item)=>item.id!=action.product.id)
                      };
    }

}
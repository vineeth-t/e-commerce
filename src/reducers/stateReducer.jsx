export function stateReducer(state,action){
    switch(action.type){
        case 'Increment':
            return {...state,
                        cartItems:
                            state.cartItems.map(
                                    (item)=>item.id===action.productID?
                                    ({...item,quantity: item.quantity + 1}):item)}
        case 'Decrement':
            return {...state,
                cartItems:
                    state.cartItems.map(
                            (item)=>item.id===action.productID?
                            ({...item,quantity: item.quantity - 1}):item)}
        case 'Add2Cart':
            return {
                ...state,
                cartItems: [...state.cartItems, action.product]
              };
        case 'Add2Wishlist':
                return {
                    ...state,
                    wishListItems: [...state.wishListItems, action.product]
                  };
        case 'deleteProduct':
                    return {
                        ...state,
                        wishListItems: state.wishListItems.filter((item)=>item.id!=action.product.id)
                      };
    }

}
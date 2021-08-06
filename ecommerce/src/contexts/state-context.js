import { createContext, useContext, useState } from "react";

export const StateContext= createContext();

export function StateProvider({children}){
    const[cartItems,setCartItem]=useState([]);
    const[wishlistItems,setWishlistItems]=useState([])
    console.log(cartItems);
    return(
        <StateContext.Provider value={{cartItems,setCartItem,wishlistItems,setWishlistItems}}>
            {children}
        </StateContext.Provider>
    )
}
export function useStateContext(){
  return useContext(StateContext);
}
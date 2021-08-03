import { createContext, useContext, useState } from "react";

export const CartContext= createContext();

export function CartProvider({children}){
    const[cartItems,setCartItem]=useState([]);
    console.log(cartItems);
    return(
        <CartContext.Provider value={{cartItems,setCartItem}}>
            {children}
        </CartContext.Provider>
    )
}
export function useCartContext(){
  return useContext(CartContext);
}
import {useEffect, createContext, useContext, useState, useReducer } from "react";
import axios from 'axios';
export const StateContext= createContext();
export function StateProvider({children}){
    const[state,dispatch]=useReducer(reducer)
    const[items,setItems]=useState([]);
    const[loader,setLoader]=useState(false);
    const[cartItems,setCartItem]=useState([]);
    const[wishlistItems,setWishlistItems]=useState([]);
    const[toast,setToast]=useState('');
    useEffect(()=>async function(){
        setLoader(true)
        try{
            const {data} = await axios.get('/api/products');
            setItems(data.products)
        }catch(error){
            console.log(error)
        }finally{
        setLoader(false)
    
        }
    }(),[])
    useEffect(()=>async function(){
        try{
            const {data} = await axios.get('/api/wishes');
            console.log({data})
            setWishlistItems(data.wishes)
        }catch(error){
            console.log(error)
        }
    }(),[])
    return(
        <StateContext.Provider value={{toast,setToast,loader,items,cartItems,setCartItem,wishlistItems,setWishlistItems}}>
            {children}
        </StateContext.Provider>
    )
}
export function useStateContext(){
  return useContext(StateContext);
}
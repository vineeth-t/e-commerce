import {useEffect, createContext, useContext, useState, useReducer } from "react";
import {stateReducer} from '../reducers/stateReducer'
import axios from 'axios';
export const StateContext= createContext();
export function StateProvider({children}){
    const[state,dispatch]=useReducer(stateReducer,{cartItems,wishListItems,toast})
    const[items,setItems]=useState([]);
    const[loader,setLoader]=useState(false);
    useEffect(()=>async function(){
        setLoader(true)
        try{
            const {data:{products}} = await axios.get('https://JungleClap-Express-Server.vineetht.repl.co/products')
            console.log(products)
            setItems(products)
        }catch(error){
            console.log(error)
        }finally{
        setLoader(false)
    
        }
    }(),[])
    useEffect(()=>async function(){
        try{
            const {data:{response}}=await axios.get('https://JungleClap-Express-Server.vineetht.repl.co/wishlist')
            console.log(response)
            dispatch({type:'SET_WISHLIST',payload:response})
          }catch(error){
            console.log(error)
          }
    }(),[])
    return(
        <StateContext.Provider value={{state,dispatch,loader,items}}>
            {children}
        </StateContext.Provider>
    )
}
export function useStateContext(){
  return useContext(StateContext);
}
export const cartItems=[];
export const wishListItems=[];
export let toast;
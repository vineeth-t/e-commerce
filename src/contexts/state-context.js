import {useEffect, createContext, useContext, useState, useReducer } from "react";
import {stateReducer} from '../reducers/stateReducer';
import {useAuth} from './index'
import axios from 'axios';
export const StateContext= createContext();
export function StateProvider({children}){
  const{authState:{userId}} =useAuth();
    const[state,dispatch]=useReducer(stateReducer,{
                                                  products,
                                                  cartItems,
                                                  wishListItems,
                                                  toast,
                                                  address:[],
                                                  currentAddress:{
                                                                    houseNo: "4-46",
                                                                    streetName: "sree ram nagar ",
                                                                    landmark: "vartha office",
                                                                    city: "khammam",
                                                                    district: "khammmam",
                                                                    pincode:507101
                                                                  }})
    const[loader,setLoader]=useState(false);
    useEffect(()=>async function(){
        setLoader(true)
        try{
            const {data:{response,products}} = await axios.get('https://JungleClap-Express-Server.vineetht.repl.co/products')
            if(response){
              dispatch({type:'SET_PRODUCTS',payload:products})
            }else{
              dispatch({type:'TOAST',toast:'Refresh the Page'})
            }
     
        }catch(error){
            console.log(error)
        }finally{
        setLoader(false)
        }
    }(),[])
    useEffect(()=>async function(){
        try{
            const {data:{response,wishlistItems}}=await axios.get(`https://JungleClap-Express-Server.vineetht.repl.co/wishlist/${userId}`)
            console.log(wishlistItems)
            if(response){
                dispatch({type:'SET_WISHLIST',payload:wishlistItems})
            }
          }catch(error){
            console.log(error)
          }
    }(),[userId])
    useEffect(()=>async function(){
        try{
            const {data:{response}}=await axios.get('https://JungleClap-Express-Server.vineetht.repl.co/cart')
            console.log(response)
            dispatch({type:'SET_CART_ITEMS',payload:response})
          }catch(error){
            console.log(error)
          }
    }(),[])
    return(
        <StateContext.Provider value={{state,dispatch,loader}}>
            {children}
        </StateContext.Provider>
    )
}
export function useStateContext(){
  return useContext(StateContext);
}
export const products=[]
export const cartItems=[];
export const wishListItems=[];
export let toast;
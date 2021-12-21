import {useEffect, createContext, useContext, useState, useReducer } from "react";
import {stateReducer} from '../reducers/stateReducer';
import {useAuth} from './index'
import { getCartItemsFromDB, getproductFromDB, getWishListedItemsFromDB } from "../components/axios/axios";
export const StateContext= createContext();
export function StateProvider({children}){
  const{authState:{userId}} =useAuth();
    const[state,dispatch]=useReducer(stateReducer,{
                                                  products,
                                                  cartItems,
                                                  wishListItems,
                                                  toast,
                                                  address:[{
                                                    name:'Alex Carey',
                                                    houseNo: "4-46",
                                                    streetName: "sree ram nagar ",
                                                    landmark: "vartha office",
                                                    city: "khammam",
                                                    district: "khammmam",
                                                    pincode:507101
                                                  }],
                                                  currentAddress:{}
                                                 })
    const[loader,setLoader]=useState(false);
    useEffect(()=>async function(){
        setLoader(true);
        getproductFromDB(setLoader,dispatch)
        
    }(),[])
    useEffect(()=>async function(){
      getCartItemsFromDB(userId,dispatch);
      getWishListedItemsFromDB(userId,dispatch)
    }(),[userId])
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
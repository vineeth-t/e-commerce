import {createContext, useContext,useEffect,useReducer, useState } from "react";
import { getproductFromDB } from "../components/axios/axios";
import {stateReducer} from '../reducers/stateReducer';
export const StateContext= createContext();
export function StateProvider({children}){
  const[loader,setLoader]=useState(false);
  let initalAddress={
    name:'Alex Carey',
    houseNo: "4-46",
    streetName: "sree ram nagar ",
    landmark: "vartha office",
    city: "khammam",
    district: "khammmam",
    pincode:507101
  }
    const[state,dispatch]=useReducer(stateReducer,{
                                                  products,
                                                  cartItems,
                                                  wishListItems,
                                                  toast,
                                                  address_details:[initalAddress],
                                                  currentAddress:initalAddress
                                                 })
 useEffect(()=>
            async function(){
                          setLoader(true);
                          getproductFromDB(setLoader,dispatch)
                                                  
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
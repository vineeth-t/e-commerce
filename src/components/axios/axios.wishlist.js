import axios from "axios";
import { API } from "./axios.setup";
export async function addToWatchlist(productId,dispatch,userId){
    try{
        const {data:{response,wishlistItems}}=await axios.post(`${API}/wishlist/${userId}`,{productId})
        if(response){
            dispatch({type:'SET_WISHLIST',payload:wishlistItems,toast:'Added to Wishlist'})
        }
        
    }catch(error){
        console.log(error)
    }
}
export async function removeFromWatchlist(productId,dispatch,userId){
    try{
        const {data:{response,wishlistItems}}=await axios.post(`${API}/wishlist/${userId}`,{productId})
        if(response){
            dispatch({type:'SET_WISHLIST',payload:wishlistItems,toast:'Removed From wishlist'})
        }
        
    }catch(error){
        console.log(error)
    }
}
  export async function getWishListedItemsFromDB(userId,dispatch,navigate){
    try{
        const {data:{response,wishlistItems}}=await axios.get(`${API}/wishlist/${userId}`)
        if(response){
            dispatch({type:'SET_WISHLIST',payload:wishlistItems})
        }
      }catch(error){
        console.log(error);
      }
  }

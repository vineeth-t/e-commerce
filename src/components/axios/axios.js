import axios from "axios";

export async function addToWatchlist(productItem,dispatch){
    try{
        const {data:{response}}=await axios.post('https://JungleClap-Express-Server.vineetht.repl.co/wishlist',productItem)
        dispatch({type:'SET_WISHLIST',payload:response,toast:'Added to Wishlist'})
    }catch(error){
        console.log(error)
    }
}
export async function removeFromWatchlist(productItem,dispatch){
    const{id}=productItem
    try{
        const {data:{response}}=await axios.delete(`https://JungleClap-Express-Server.vineetht.repl.co/wishlist/${id}`,)
        dispatch({type:'SET_WISHLIST',payload:response,toast:'Removed From wishlist'})
    }catch(error){
        console.log(error)
    }
}
import axios from "axios";

export async function addToWatchlist(productItem,dispatch){
    try{
        const {data:{response}}=await axios.post('https://JungleClap-Express-Server.vineetht.repl.co/wishlist',productItem)
        dispatch({type:'wishlist',payload:response})
    }catch(error){
        console.log(error)
    }
}
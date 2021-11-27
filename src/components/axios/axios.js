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
export async function addToCart(productItem,dispatch){
    try{
        const {data:{response}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/cart`,productItem)
        dispatch({type:'SET_CART_ITEMS',payload:response,toast:'Added to Cart'})
    }catch(error){
        console.log(error)
    }
}
export async function removeFromCart(id,dispatch){
    try{
        const {data:{response}}=await axios.delete(`https://JungleClap-Express-Server.vineetht.repl.co/cart/${id}`)
        dispatch({type:'SET_CART_ITEMS',payload:response,toast:'Removed from Cart'})
    }catch(error){
        console.log(error)
    }
}
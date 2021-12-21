import axios from "axios";

export async function addToWatchlist(productId,dispatch,userId){
    try{
        const {data:{response,wishlistItems}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/wishlist/${userId}`,{productId})
        if(response){
            dispatch({type:'SET_WISHLIST',payload:wishlistItems,toast:'Added to Wishlist'})
        }
        
    }catch(error){
        console.log(error)
    }
}
export async function removeFromWatchlist(productId,dispatch,userId){
    try{
        const {data:{response,wishlistItems}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/wishlist/${userId}`,{productId})
        if(response){
            dispatch({type:'SET_WISHLIST',payload:wishlistItems,toast:'Removed From wishlist'})
        }
        
    }catch(error){
        console.log(error)
    }
}
export async function addToCart(productId,dispatch,userId){
    try{
        const {data:{response,cartItems}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/cart/${userId}`,{productId})
        console.log(cartItems)
        if(response){
          dispatch({type:'SET_CART_ITEMS',payload:cartItems,toast:'Added to Cart'})
        }else{
          dispatch({type:'TOAST',payload:'Internal Server Error, Refresh'})
        }
}catch(error){
    console.log(error)
}
}
export async function removeFromCart(productId,dispatch,userId){
    try{
        const {data:{response,cartItems}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/cart/${userId}`,{productId,flag:'DELETE'})
        console.log(cartItems)
        if(response){
          dispatch({type:'SET_CART_ITEMS',payload:cartItems,toast:'Removed From Cart'})
        }else{
          dispatch({type:'TOAST',payload:'Internal Server Error, Refresh'})
        }
}catch(error){
    console.log(error)
}
}
export async function incrementQuantity(productId,dispatch,userId){
    try{
        const {data:{response,cartItems}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/cart/${userId}`,{productId,flag:'INC'})
        console.log(cartItems)
        if(response){
          dispatch({type:'SET_CART_ITEMS',payload:cartItems})
        }else{
          dispatch({type:'TOAST',payload:'Internal Server Error, Refresh'})
        }
}catch(error){
    console.log(error)
}
}
export async function decrementQuantity(productId,dispatch,userId){
    try{
        const {data:{response,cartItems}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/cart/${userId}`,{productId,flag:'DEC'})
        console.log(cartItems)
        if(response){
          dispatch({type:'SET_CART_ITEMS',payload:cartItems})
        }else{
          dispatch({type:'TOAST',payload:'Internal Server Error, Refresh'})
        }
}catch(error){
    console.log(error)
}
}

export async function signUpHandler(e,navigate,formChecker,formState,errorDispatch,authDispatch){
    e.preventDefault();
    if(formChecker(formState,errorDispatch)) {
        const {data:{response,userId}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/signUp`,{firstname:formState.fname,lastname:formState.lname,username:formState.emailId,
        password:formState.password}) 
        if(response){
            localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:formState.fname,userId:userId}))
            authDispatch({type:'LOGIN',payload:{fname:formState.fname,userId:userId}})
            navigate('/profile')
        }else{
            navigate('/signUp')
            alert('something went wrong!')
        }
            
    }                             
  }

  export async function loginHandler(event,loginDetails){
      event.preventDefault ();
      const{state,userName,password,authDispatch,navigate}=loginDetails
      try{
        const {data:{response,fname,userId}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/logIn`,{username:userName,password:password})
        if(response){
            localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:fname,userId:userId}))
            authDispatch({type:'LOGIN',payload:{fname,userId}})
            navigate(state?.from?state.from:'/profile')
        }
      }catch(error){
          console.log(error)
      }
    
  }
  export async function getproductFromDB(setLoader,dispatch){
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
  }
   export async function getCartItemsFromDB(userId,dispatch){
    try{
        const {data:{response,cartItems}}=await axios.get(`https://JungleClap-Express-Server.vineetht.repl.co/cart/${userId}`)
        console.log(cartItems)
        if(response){
          dispatch({type:'SET_CART_ITEMS',payload:cartItems})
        }else{
          dispatch({type:'TOAST',payload:'Internal Server Error, Refresh'})
        }
       
      }catch(error){
        console.log(error)
      }
  }

  export async function getWishListedItemsFromDB(userId,dispatch){
    try{
        const {data:{response,wishlistItems}}=await axios.get(`https://JungleClap-Express-Server.vineetht.repl.co/wishlist/${userId}`)
        console.log(wishlistItems)
        if(response){
            dispatch({type:'SET_WISHLIST',payload:wishlistItems})
        }
      }catch(error){
        console.log(error)
      }
  }

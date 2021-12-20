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
          dispatch({type:'SET_CART_ITEMS',payload:cartItems})
        }else{
          dispatch({type:'TOAST',payload:'Internal Server Error, Refresh'})
        }
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

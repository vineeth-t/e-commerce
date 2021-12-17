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
export async function incrementQuantity(id,dispatch){
    try{
        const {data:{response}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/cart/${id}`,{flag:'INC'})
        dispatch({type:'SET_CART_ITEMS',payload:response})
    }catch(error){
        console.log(error)
    }
}
export async function decrementQuantity(id,dispatch){
    try{
        const {data:{response}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/cart/${id}`,{flag:'DEC'})
        dispatch({type:'SET_CART_ITEMS',payload:response})
    }catch(error){
        console.log(error)
    }
}

export async function signUpHandler(e,navigate,formChecker,formState,errorDispatch,authDispatch){
    e.preventDefault();
    if(formChecker(formState,errorDispatch)) {
        const {data:{response}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/signUp`,{firstname:formState.fname,lastname:formState.lname,username:formState.emailId,
        password:formState.password}) 
        if(response){
            localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:formState.fname}))
            authDispatch({type:'LOGIN',payload:formState.fname})
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
      console.log(navigate)
      try{
        const {data:{response,fname}}=await axios.post(`https://JungleClap-Express-Server.vineetht.repl.co/logIn`,{username:userName,password:password})
        console.log(response,fname)
        if(response){
            localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:fname}))
            authDispatch({type:'LOGIN',payload:fname})
            navigate(state?.from?state.from:'/profile')
        }
      }catch(error){
          console.log(error)
      }
    
  }


import {NavBar,Footer,SignUp,Login} from './components/index';
import { Cart, Home,Wishlist,ProductItemsListing, Profile} from './Routes/index';
import {PrivateRoute} from './Routes/PrivateRoute/privateRoute'
import {Route, Routes } from "react-router-dom";
import {useEffect } from "react";
import './style.css'
import { useAuth, useStateContext } from './contexts';
import { getCartItemsFromDB, getWishListedItemsFromDB } from './components/axios';
function App() {
  const{dispatch}=useStateContext()
  const{authState:{token}} =useAuth();
  useEffect(()=>async function(){
    console.log(token)
    if(token){
      getCartItemsFromDB(dispatch);
      // getWishListedItemsFromDB(token,dispatch,navigate)
    }
  }(),[token,dispatch])
  return (
    <div className="App">
      <div className='App-Container'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductItemsListing />}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <PrivateRoute path='/profile' element={<Profile/>}/>
            <PrivateRoute path='/cart' element={<Cart/>}/>
            <PrivateRoute path='/wishlist' element={<Wishlist/>}/>
            </Routes>
      </div>
    <Footer/>
    </div>
  );
}

export default App;

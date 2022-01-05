
import {NavBar,Footer,SignUp,Login} from './components/index';
import { Cart, Home,Wishlist,ProductItemsListing, Profile} from './Routes/index';
import {PrivateRoute} from './Routes/PrivateRoute/privateRoute'
import { Route, Routes } from "react-router-dom";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import { useAuth, useStateContext } from './contexts';
import { getCartItemsFromDB, getWishListedItemsFromDB } from './components/axios/axios';
function App() {

  const{dispatch}=useStateContext()
  const{authState:{userId}} =useAuth();
  const navigate=useNavigate()

  useEffect(()=>async function(){
    getCartItemsFromDB(userId,dispatch,navigate);
    getWishListedItemsFromDB(userId,dispatch,navigate)
  }(),[userId,dispatch,navigate])
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


import {NavBar,Footer,SignUp,Login} from './components/index';
import { Cart, Home,Wishlist,ProductItemsListing} from './Routes/index';
import {PrivateRoute} from './Routes/PrivateRoute/privateRoute'
import {Route, Routes } from "react-router-dom";
import {useEffect } from "react";
import './style.css'
import { useAuth, useStateContext } from './contexts';
import { getCartItemsFromDB, getWishListedItemsFromDB } from './components/axios';
import { PersonalDetails } from './Routes/ProfileDetails/profile';
import { getAddressOfUser } from './components/axios/axios.address';
import { ShowAllAddresses } from './components/addressCard/showAllAddresses';
function App() {
  const{dispatch}=useStateContext()
  const{authState:{token}} =useAuth();
  useEffect(()=>async function(){
    if(token){
      getCartItemsFromDB(dispatch);
      getWishListedItemsFromDB(dispatch);
      getAddressOfUser(dispatch)
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
            <PrivateRoute path='/profile' element={<PersonalDetails/>}/>
            <PrivateRoute path='/cart' element={<Cart/>}/>
            <PrivateRoute path='/wishlist' element={<Wishlist/>}/>
            <PrivateRoute path='/personalDetails' element={<PersonalDetails/>}/>
            <PrivateRoute path='/addresses' element={<ShowAllAddresses/>}/>
            </Routes>
      </div>
    <Footer/>
    </div>
  );
}

export default App;

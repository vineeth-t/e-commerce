
import {NavBar,Footer,SignUp,Login} from './components/index';
import { Cart, Home,Wishlist,ProductItemsListing, Profile} from './Routes/index';
import {PrivateRoute} from './Routes/PrivateRoute/privateRoute'
import { Route, Routes } from "react-router-dom";
import './style.css'
function App() {
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

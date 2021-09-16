import {NavBar} from './components/index';
import {Footer} from './components/index';
import { Cart, Home,Wishlist,ProductItemsListing,Login} from './Routes/index';
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
            <PrivateRoute path='/cart' element={<Cart/>}/>
            <PrivateRoute path='/wishlist' element={<Wishlist/>}/>
            <Route path='/login' element={<Login/>}/>
            </Routes>
      </div>
    <Footer/>
    </div>
  );
}

export default App;

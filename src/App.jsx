import {NavBar} from './components/index';
import {Footer} from './components/index';
import { Cart, Home,Wishlist,ProductItemsListing } from './Routes/index';
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
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            </Routes>
      </div>
    <Footer/>
    </div>
  );
}

export default App;

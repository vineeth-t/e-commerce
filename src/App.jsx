import {NavBar} from './components/index';
import {Footer} from './components/index';
import { Cart, Home,Wishlist,ProductItemsListing,Login } from './Routes/index';
import { Navigate } from 'react-router';
import { Route, Routes } from "react-router-dom";
import './style.css'
import { useAuth } from './contexts/authProvider';
function App() {
 const{ isUserLoggedIn}=useAuth()
  function PrivateRoute({...props}){
    return isUserLoggedIn?<Route {...props}/>:<Navigate replace to='/login'/>
  }
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

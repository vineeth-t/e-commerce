import {NavBar} from './components/index';
import {Footer} from './components/index';
import {ProductItemsListing} from './components/index'
import { Cart, Home } from './Routes/index';
import { useState } from 'react';
import { Wishlist } from './Routes/index';
import './style.css'
function App() {
  const [Route,SetRoute]=useState('Home')
  return (
    <div className="App">
      <div className='App-Container'>
          <NavBar Route={Route} setState={SetRoute}/>
          {Route==='Home'&& <Home setState={SetRoute}/>}
          {Route==='Products'&&<ProductItemsListing/>}
          {Route==='Cart'&&<Cart/>}
          {Route==='Wishlist'&&<Wishlist/>}
      </div>
    <Footer/>
    </div>
  );
}

export default App;

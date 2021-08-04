import {NavBar} from './components/index';
import {Hero} from './components/index';
import {Footer} from './components/index';
import {ProductItemsListing} from './components/index'
import { Cart } from './components/index';
import { useState } from 'react';
import './style.css'
function App() {
  const [Route,SetRoute]=useState('Home')
  return (
    <div className="App">
      <div className='App-Container'>
          <NavBar Route={Route} setState={SetRoute}/>
          {Route==='Home'&& <Hero setState={SetRoute}/>}
          {Route==='Products'&&<ProductItemsListing/>}
          {Route==='Cart'&&<Cart/>}
      </div>
    <Footer/>
    </div>
  );
}

export default App;

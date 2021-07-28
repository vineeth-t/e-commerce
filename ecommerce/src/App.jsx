import {NavBar} from './components/navigationBar/index';
import {Hero} from './components/heroImage/index';
import {ShoppingCatergory} from './components/productCatergories/index'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <ShoppingCatergory/>
    </div>
  );
}

export default App;

import {NavBar} from './components/navigationBar';
import {Hero} from './components/heroImage';
import {ShoppingCatergory} from './components/productCatergories'
import {Footer} from './components/footer/'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <ShoppingCatergory/>
      <Footer/>
    </div>
  );
}

export default App;

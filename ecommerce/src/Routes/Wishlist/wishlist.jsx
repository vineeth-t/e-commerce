import {useStateContext} from '../../contexts/state-context';
import './wishlist.css'
import { ProductCard } from '../productCard/productCard';

export function deleteItem(id,setWishlistItems) {  
    setWishlistItems((items)=>items.filter((item) => item.id !== id));

};
export function Wishlist(){
    let whereIsProduct='inWishlist';

   const {wishlistItems}=useStateContext();
    return(
        <div className='wishlist-container'>
            <h3>Wishlist</h3>
            <div className='wishlist-items'>
            {wishlistItems.map((productItem)=>{
                return(
                   <div >
                        <ProductCard 
                        key={productItem.id}
                            productItem={productItem}
                             whereIsProduct={whereIsProduct}
                        />
                    </div>
                )
               
            })}
            </div>
           
        </div>
    )
}


// 
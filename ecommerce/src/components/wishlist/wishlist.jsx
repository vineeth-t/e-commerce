import {useStateContext} from '../../contexts/state-context';
import { ProductCard } from '../productCard/productCard';
import './wishlist.css'
export function Wishlist(){
    let whereIsProduct='Whislist'
   const{wishlistItems}= useStateContext();
    return(
        <div className='wishlist-container'>
            <h3>Wishlist</h3>
            <div className='wishlist-items'>
            {wishlistItems.map(({name,image,price})=>{
                return(
                   <div >
                        <ProductCard
                        name={name}
                        image={image}
                        price={price}
                        whereIsProduct={whereIsProduct}
                        />
                    </div>
                )
               
            })}
            </div>
           
        </div>
    )
}
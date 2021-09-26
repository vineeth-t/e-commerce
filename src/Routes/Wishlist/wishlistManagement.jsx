import {useStateContext} from '../../contexts/state-context';
import './wishlist.css'
import { ProductCard } from '../../components';

export function Wishlist(){
   const {state:{wishListItems}}=useStateContext();
    return(
        <div className='wishlist-container'>
            <div style={{textAlign:"center",padding:"1rem"}}>
            <h3>Wishlist</h3>
            {
                wishListItems.length===0 && <h5 style={{padding:"1rem"}}>Aww, wishlist is empty</h5>
            }
            </div>
           
            <div className='wishlist-items'>
            {wishListItems.map((productItem)=>{
                return(
                   <div>
                        <ProductCard 
                             key={productItem.id}
                             productItem={productItem}
                        />
                    </div>
                )
            })}
            </div>           
        </div>
    )
}


// 
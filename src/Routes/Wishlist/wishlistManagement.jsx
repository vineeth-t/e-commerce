import {useStateContext} from '../../contexts/state-context';
import './wishlist.css'
import { ProductCard } from '../../components';

export function Wishlist(){
   const {state}=useStateContext();
    return(
        <div className='wishlist-container'>
            <div style={{textAlign:"center",padding:"1rem"}}>
            <h3>Wishlist</h3>
            {
                state.wishListItems.length===0 && <h5 style={{padding:"1rem"}}>Aww, wishlist is empty</h5>
            }
            </div>
           
            <div className='wishlist-items'>
            {state.wishListItems.map((productItem)=>{
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
import {useStateContext} from '../../contexts/state-context';
import './wishlist.css'
import { ProductCard } from '../../components';

export function deleteItem(product,setWishlistItems,setCartItem,whereAmI) {  
    if(whereAmI==='Cart'){
        setCartItem((items)=>items.filter((item) => item.id !== product.id));
        setWishlistItems(
            (items)=>(
                items.some((item)=>item.id===product.id))?
                [...items]:[...items,product])
    }else{
        setWishlistItems((items)=>items.filter((item) => item.id !== product.id));
    }
    

};
export function Wishlist(){
    let whereIsProduct='inWishlist';

   const {wishlistItems}=useStateContext();
    return(
        <div className='wishlist-container'>
            <div style={{textAlign:"center",padding:"1rem"}}>
            <h3>Wishlist</h3>
            {
                wishlistItems.length===0 && <h5 style={{padding:"1rem"}}>Aww, wishlist is empty</h5>
            }
            </div>
           
            <div className='wishlist-items'>
            {wishlistItems.map((productItem)=>{
                return(
                   <div>
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
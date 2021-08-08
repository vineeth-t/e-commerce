import {useStateContext} from '../../contexts/state-context';
import axios from 'axios';
import { deleteItem } from '../wishlist/wishlist';

export function ProductCard({productItem,whereIsProduct}){
    const {id,name,image,price}=productItem;
    const {setWishlistItems,setCartItem}=useStateContext();
    async function whishList(product)
         {
            console.log({product})
            setWishlistItems((item)=>[...item,product])
            const response = await axios.post("/api/wishes", { wish: product });
        
        }
    return (
        <div className="card-overlay">
                <img style={{width: "251px",
                        height: "251px"}} src={image} alt="cardImage"/> 
                <h4>{name}</h4>
                <small className="Item Item-price"> Rs.{price} </small>
                <s className="Item Item-discount">Rs.{price-0.5*price}</s>
                <span className="Item Item-discountPercentage">(50% off) </span> 
                {whereIsProduct==='Product' &&
                <button className="wishlist-l" 
                    onClick={()=>whishList({id,name,image,price})}>
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3z" fill="currentColor"></path></svg>
                </button>
            }
            {whereIsProduct==='Wishlist' &&
             <button onClick={()=>deleteItem(id,setWishlistItems)} className="wishlist-l">X</button>
        }
                <br/>
               
                <button className='btn-add2Cart' 
                        onClick={()=>setCartItem((item)=>[...item,{id,name,image,price}])}>
                        Add to cart
                    </button>
                 
        </div>
    )
}
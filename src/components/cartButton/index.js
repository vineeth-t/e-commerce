import { Link } from "react-router-dom"
import { useStateContext } from "../../contexts/state-context"
import { addToCart } from '../axios/axios';
export function CartButton(productId){
    const {state:{cartItems},dispatch}=useStateContext()
    return cartItems.some((item)=>item.id===productId) ?
        <Link to='/cart'>
           <button className='btn-add2Cart'>
               Go to Cart
           </button>
           </Link> :
           <button className='btn-add2Cart' onClick={()=>addToCart(productId,dispatch)}>
               Add to cart
           </button>
       
}
import { useStateContext } from "../../contexts/state-context";
import './cart.css'
import { deleteItem } from "../Wishlist/wishlistManagement";
export function Cart(){
    let totalAmount=0.0;
    const {cartItems,setCartItem,setWishlistItems}=useStateContext();
    return (
        <div>
            <div style={{textAlign:"center",padding:"1rem"}}>
            <h3 >My Cart</h3>
            {
                cartItems.length===0 && <h5 style={{padding:"1rem"}}>Your cart is empty</h5>
            }
            </div>
            
            <div class='cart-holder'>
                <div>
                     {cartItems.length>=1&&
                        <div className='address-container'>             
                              <small className='address-details'>
                                    <h6>Deliver To:</h6> Alex carey <br/>
                                    <small>H.No-4-1/40, Indra Nagar, Bangolre, 5000001</small>
                                </small>
                        </div>
                      }
                     {cartItems.map(({id,name,image,price})=>{
                                        totalAmount=totalAmount +  parseInt( price, 10 );
                                    return (
                                    <div class='cart-container'>
                                                <div className='cart-item-container' >   
                                                        <img className='cart-item-img' src={image}/>
                                                        <div className='cart-item-details'>
                                                            <div>
                                                            <h5>{name}</h5>
                                                            <h6>Rs/-{price}</h6>
                                                            
                                                            </div>
                                                            <div className='button-qty'>
                                                                <button className='btn-primary'>-</button>
                                                               <span className='quantity'>1</span> 
                                                                <button className='btn-primary'>+</button>
                                                            </div>
                                                           <div>
                                                           <button className='btn-wishlist' onClick={()=>deleteItem({id,name,image,price},setWishlistItems,setCartItem,"Cart")}>Move to Wishlist</button>
                                                               </div>
                                                        </div> 
                                                    </div>   
                                    
                                        </div>
                                    )
                                })}
                    </div>
                    {cartItems.length>=1&&<div class='cart-price-deatils'>
                        <h5>Price Details ({cartItems.length} items)</h5>
                        <div style={{display:'flex',margin:"1rem 0 0 0"}}>
                            <h6 style={{margin:"0 1rem 0 0"}}>Total Mrp Rs/-</h6>
                            <h6>{totalAmount}</h6>
                        </div>
                        <button className='btn-add2Cart'>Place Order</button>
                    </div>}
          </div>
    </div>
    )
}
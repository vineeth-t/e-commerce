import { useStateContext } from "../../contexts/state-context";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../components/axios/axios";
import './cart.css';
export function Cart(){
    let totalAmount=0.0;
    const {state,dispatch}=useStateContext();
return (
    <div className='cart-hero'>
        <div className='cart-holder'>
             <div style={{textAlign:"center",padding:"1rem"}}>
                <h3 >My Cart</h3>
                {
                    state.cartItems.length===0 && <h5 style={{padding:"1rem"}}>Your cart is empty</h5>
                }
             </div>
            <div>
                {state.cartItems.length>=1&&
                    <div className='address-container'>             
                        <small className='address-details'>
                            <h6>Deliver To:</h6> Alex carey <br/>
                            <small>H.No-4-1/40, Indra Nagar, Bangolre, 5000001</small>
                        </small>
                    </div>
                }
            </div>
            <div>
                <div>
                    {state.cartItems.map(({id,name,image,price,quantity,inStock})=>{
                        // const productItem={id,name,image,price,quantity,inStock}
                        totalAmount=totalAmount + ( (quantity)*parseInt( price, 10 ))
                    return (
                            <div className='cart-container'>
                                     <div className='cart-item-container' >   
                                                <img className='cart-item-img' src={image} alt='itemImg'/>
                                                     <div className='cart-item-details'>
                                                            <div>
                                                            <h4>{name}</h4>
                                                            <h5>Rs/-{(quantity)*price}</h5>
                                                            </div>
                                                            <section className='button-qty'>
                                                                <button onClick={()=>decrementQuantity(id,dispatch)} className='btn-primary'>-</button>
                                                                <span className='quantity'>{quantity}</span> 
                                                                <button onClick={()=>incrementQuantity(id,dispatch)} className='btn-primary'>+</button>
                                                            </section>
                                                            <section className='btn-section'>
                                                                 {/* <button className='btn btn-wishlist' onClick={()=>addToWatchlist(productItem,dispatch)}>Wishlist</button> */}
                                                                 <button className='btn btn-remove' onClick={()=>removeFromCart(id,dispatch)}>Remove</button>
                                                                 <button className='btn btn-remove-icon' onClick={()=>removeFromCart(id,dispatch)}><svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"  fill="currentColor"></path></svg></button>
                                                            </section>
                                                        </div> 
                                                    </div> 
                                    </div>
                                    )
                                })} 
                             </div>
                        
                    </div>
               </div>
               <div className='billing-details'>
                    {state.cartItems.length>=1&&<div className='cart-price-deatils'>
                            <h5>Price Details ({state.cartItems.length} items)</h5>
                            <div style={{display:'flex',margin:"1rem 0 0 0"}}>
                                <h5 style={{margin:"0 1rem 0 0"}}>Total Mrp Rs/-</h5>
                                <h5>{totalAmount}</h5>
                            </div>
                            <button className='btn-add2Cart'>Place Order</button>
                    </div>}
             </div>
    </div>
    )
}
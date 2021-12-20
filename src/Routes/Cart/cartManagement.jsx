import { decrementQuantity, incrementQuantity, removeFromCart } from "../../components/axios/axios";
import './cart.css';
import { AddressCard, AdressModal } from "../../components/addressCard/addressCard";
import { useState } from "react";
import { useAuth,useStateContext } from "../../contexts";
export function Cart(){
    const{authState:{userId}}=useAuth()
    const[address,setAddress]=useState(false)
    let totalAmount=0.0;
    const {state,dispatch}=useStateContext();
return (
    <div className='cart-hero'>
         {address&&<AdressModal setAddress={setAddress}/>}
        <div className='cart-holder'>
             <div style={{textAlign:"center",padding:"1rem"}}>
                <h3 >My Cart</h3>
                {
                    state.cartItems.length===0 && <h5 style={{padding:"1rem"}}>Your cart is empty</h5>
                }
             </div>
           
            <div>
                {state.cartItems.length>=1&&
                    <AddressCard setAddress={setAddress}/>
                }
            </div>
            <div>
                <div>
                    {state.cartItems.map(({product,quantity})=>{
                        const {_id,name,image,price}= product
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
                                                                <button onClick={()=>decrementQuantity(_id,dispatch,userId)} className='btn-primary'>-</button>
                                                                <span className='quantity'>{quantity}</span> 
                                                                <button onClick={()=>incrementQuantity(_id,dispatch,userId)} className='btn-primary'>+</button>
                                                            </section>
                                                            <section className='btn-section'>
                                                                 {/* <button className='btn btn-wishlist' onClick={()=>addToWatchlist(productItem,dispatch)}>Wishlist</button> */}
                                                                 <button className='btn btn-remove' onClick={()=>removeFromCart(_id,dispatch,userId)}>Remove</button>
                                                                 <button className='btn btn-remove-icon' onClick={()=>removeFromCart(_id,dispatch,userId)}><svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"  fill="currentColor"></path></svg></button>
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
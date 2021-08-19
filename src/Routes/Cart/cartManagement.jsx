import { useStateContext } from "../../contexts/state-context";
import './cart.css'
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
                    {state.cartItems.map(({id,name,image,price,quantity})=>{
                        totalAmount=totalAmount + ( (quantity)*parseInt( price, 10 ))
                    return (
                            <div className='cart-container'>
                                     <div className='cart-item-container' >   
                                                <img className='cart-item-img' src={image} alt='Item-Image'/>
                                                     <div className='cart-item-details'>
                                                            <div>
                                                            <h5>{name}</h5>
                                                            <h6>Rs/-{(quantity)*price}</h6>
                                                            </div>
                                                            <div className='button-qty'>
                                                                <button onClick={()=>dispatch({type:"Decrement",productID:id})} className='btn-primary'>-</button>
                                                                <span className='quantity'>{quantity}</span> 
                                                                <button onClick={()=>dispatch({type:"Increment",productID:id})} className='btn-primary'>+</button>
                                                            </div>
                                                            <div>
                                                                 <button className='btn-wishlist' onClick={()=>dispatch({type:'Move2Wishlist',product:{id,name,image,price}})}>Move to Wishlist</button>
                                                            </div>
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
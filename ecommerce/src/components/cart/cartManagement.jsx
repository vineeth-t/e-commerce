import { useCartContext } from "../../contexts/cart-context";
import './cart.css'
export function Cart(){
    let whereIsProduct='Cart';
    let totalAmount=0.0;
    const {cartItems}=useCartContext();
    return (
        <div>
            <h3 style={{textAlign:"center",padding:"2rem"}}>My Cart</h3>
            <div class='cart-holder'>
                        <div>
                                {cartItems.length>=1&&
                                    <div className='address-container'>             
                                            <small className='address-details'>
                                            <h6>Deliver To:</h6>
                                                Alex carey <br/>
                                                <small>H.No-4-1/40, Indra Nagar, Bangolre, 5000001</small>
                                            </small>
                                    </div>
                                }
                                    {cartItems.map(({name,image,price})=>{
                                        totalAmount=totalAmount +  parseInt( price, 10 );
                                        console.log({price})
                                    return (
                                    <div class='cart-container'>
                                                <div className='cart-item-container' >   
                                                        <img className='cart-item-img' src={image}/>
                                                        <div className='cart-item-details'>
                                                            <div>
                                                            <h5>{name}</h5>
                                                            <h6>Rs/-{price}</h6>
                                                            </div>
                                                            
                                                            <div>
                                                                <button className=''>+</button>0
                                                                <button>-</button>
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
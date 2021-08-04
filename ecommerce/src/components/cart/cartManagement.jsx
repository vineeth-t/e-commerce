import { useCartContext } from "../../contexts/cart-context";
import { ProductCard } from "../productCard/productCard";
export function Cart(){
    let whereIsProduct='Cart';
    const {cartItems}=useCartContext();
    return (
        <div>
            Cart
            {cartItems.map(({name,image,price})=>{
            return (
                <ProductCard 
                name={name}
                image={image}
                price={price}
                whereIsProduct={whereIsProduct}
                />
            )
        })}
        </div>
    )
}
import './products.css'
import { useStateContext } from "../../contexts/state-context";
import { ProductCard } from "../productCard/productCard";
export function ProductItemsListing(){
   const{loader,items}= useStateContext()
    let whereIsProduct='Product';
    
return (
    <div className='item-list'>
        <h3>{loader&&'loading...'}</h3>
        {items.map((productItem)=>{
            return (
               <ProductCard 
               productItem={productItem}
               whereIsProduct={whereIsProduct}
               />
            )
        })}
    </div>
)
}
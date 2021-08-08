import './products.css'
import { useStateContext } from "../../contexts/state-context";
import { ProductCard } from '../../components';
export function ProductItemsListing(){
   const{loader,items}= useStateContext()
    let whereIsProduct='inProductPage';   
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
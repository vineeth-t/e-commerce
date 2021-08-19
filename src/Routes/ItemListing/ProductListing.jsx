import './products.css'
import { useStateContext } from "../../contexts/state-context";
import { ProductCard } from '../../components';
export function ProductItemsListing( {setState}){
   const{loader,items,setToast}= useStateContext()  
return (
    <div className='item-list'>
        <h3>{loader&&'loading...'}</h3>
        {items.map((productItem)=>{
            return (
               <ProductCard
                key={productItem.id}
                productItem={productItem}
               setToast={setToast}
               setState={setState}
               />
            )
        })}
    </div>
)
}
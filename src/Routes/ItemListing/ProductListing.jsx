import './products.css'
import { useStateContext } from "../../contexts/state-context";
import { ProductCard } from '../../components';
import {DataFiltering} from '../../components'
import { useDataFilter } from '../../contexts';
import { getFilterData, getSortedData } from '../../reducers/filterReducer';
export function ProductItemsListing( {setState}){
   const{state:{products},loader,setToast}= useStateContext();
   const{state:{sortBy,toggleInventory,showJCAssured}}=useDataFilter();
   const sortedData=getSortedData(products,sortBy)
   const filterData=getFilterData(sortedData,{
                                                toggleInventory,
                                                showJCAssured
                                            })

return (
    <div className='item-page'>
        <h3>{loader&&'loading...'}</h3>
        <div className='item-filter'><DataFiltering/></div>    
        <div className='item-list'>
        {filterData.map((productItem)=>{
            return (
               <ProductCard
                key={productItem._id}
                productItem={productItem}
               setToast={setToast}
               setState={setState}
               />
            )
        })}
        </div>
    </div>
)
}
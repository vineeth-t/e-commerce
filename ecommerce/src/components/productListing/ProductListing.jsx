import { useEffect, useState } from "react"
import axios from 'axios';
export function ProductItemsListing(){
    const[items,setItems]=useState([{}])
    useEffect(()=>async function(){
        try{
            const {data,status,statusText} = await axios.get('/api/products');
            console.log({data})
            setItems(data.products)
        }catch(error){
            console.log(error)
        }
    }(),[])
return (
    <div>
        Products
        {items.map((Item)=>{
            return (
                <div>
                    {Item.name}
                    </div>
            )
        })}
    </div>
)
}
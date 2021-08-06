import { useEffect, useState } from "react";
import './products.css'
import axios from 'axios';
import { ProductCard } from "../productCard/productCard";
export function ProductItemsListing(){
    let whereIsProduct='Product';
    const[items,setItems]=useState([]);
    const[loader,setLoader]=useState(false);
    
    useEffect(()=>async function(){
        setLoader(true)
        try{
            const {data,status,statusText} = await axios.get('/api/products');
            setItems(data.products)
        }catch(error){
            console.log(error)
        }finally{
        setLoader(false)

        }
    }(),[])
return (
    <div className='item-list'>
        <h3>{loader&&'loading...'}</h3>
        {items.map(({name,image,price})=>{
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
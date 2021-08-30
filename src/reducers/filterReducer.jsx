export function FilterReducer(state,action){
switch(action.type){
    case 'FAST_DELIVERY':
        return {
            ...state, showJCAssured:!state.showJCAssured
        }
    case 'INCLUDE_OUT_OF_STOCK':
        return{
            ...state,toggleInventory:!state.toggleInventory
        }
    case 'SORT':
        return{
            ...state,sortBy:action.payload
        }
}
}
export function getFilterData(productList,{
    toggleInventory,
    showJCAssured
   }){
       console.log({  showJCAssured,toggleInventory
        })
    if(showJCAssured===true && toggleInventory===true ){
        return productList.filter((product)=>product.fastDelivery===true && product.inStock===false)

    } else if(showJCAssured===true && toggleInventory===false ){
        return productList.filter((product)=>product.fastDelivery===true && product.inStock===true)
    }else if(showJCAssured===false && toggleInventory===false ){
        return productList.filter((product)=> product.inStock===true)
    }
    else {
      return productList
    }
}
export function getSortedData(productList,sortBy){
    if(sortBy==='HIGH_TO_LOW'){
        return productList.sort((a,b)=>b['price']-a['price'])
    } if(sortBy==='LOW_TO_HIGH'){
        return productList.sort((a,b)=>a['price']-b['price'])
    } 
    // if(sortBy==='CLEAR_FILTER'){
    //     return productList
    // }
    return productList
}
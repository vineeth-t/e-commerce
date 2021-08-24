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
    if(showJCAssured){
        return productList.filter((product)=>product.fastDelivery===true)
    }
    if(toggleInventory){
        return productList
    }else if(toggleInventory===false){
      return productList.filter((product)=>product.inStock===true)
    }
    return productList
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
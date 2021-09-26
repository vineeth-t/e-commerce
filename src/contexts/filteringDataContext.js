import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers/filterReducer";
export  const DataFilter=createContext();
export function FilterDataProvider({children}){
      const [state,dispatch]=useReducer(FilterReducer,{
              sortBy:null,
              toggleInventory:false,
              showJCAssured:false })
       return(
               <DataFilter.Provider value={{state,dispatch}}>
                       {children}
               </DataFilter.Provider>
       )        
}
export function useDataFilter(){
        return useContext(DataFilter)
}

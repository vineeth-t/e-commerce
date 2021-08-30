import './dataFilter.css'
import { useState } from 'react'
import { Sort } from '../index'
import { Filters } from './catergories'
export function FilterTheData(){
 const[showtheFilter,setTheFilter]=useState('')
    return (
        <>
            <div className='filterCard-for-desktop'>
              <Sort/>
              <Filters/>
            </div>
            <div>

            </div>
            {showtheFilter===''&& 
            <div className='filterCard-for-mobile'>
              <div className='filterCard-child' onClick={()=>setTheFilter('sort-card')}>
                <label>Sort</label>
                <svg width="24" height="24" viewBox="0 0 24 24" ><g fill="none"><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="#282C3F" d="M7.445 7.48V5.672L5.665 7.48h1.78zm1.09-4.42c.304.12.465.39.465.706v16.437a.784.784 0 01-.783.797.762.762 0 01-.772-.781V8.982H4.003a.832.832 0 01-.765-.204.759.759 0 01.002-1.105L7.652 3.23a.832.832 0 01.882-.17zm8.02 15.269l1.78-1.81h-1.78v1.81zm4.207-3.107a.76.76 0 01-.002 1.106l-4.412 4.442a.832.832 0 01-.882.17c-.305-.12-.466-.39-.466-.706V3.797c0-.432.332-.797.783-.797.45 0 .772.35.772.781v11.237h3.442a.833.833 0 01.765.204z"></path></g></svg>
              </div>
              <div className='filterCard-child' onClick={()=>setTheFilter('filter-card')}>
                <label>Filters</label>
                <svg width="24" height="24" viewBox="0 0 24 24" ><g fill="none" ><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="#282C3F" d="M3.749 7.508a.75.75 0 010-1.5h3.138a2.247 2.247 0 014.243 0h9.121a.75.75 0 010 1.5h-9.126a2.248 2.248 0 01-4.232 0H3.749zm13.373 9h3.129a.75.75 0 010 1.5h-3.135a2.247 2.247 0 01-4.231 0H3.749a.75.75 0 010-1.5h9.13a2.248 2.248 0 014.243 0z"></path></g></svg>
              </div>
            </div>}
            {showtheFilter==='sort-card' && <Sort showtheFilter={showtheFilter}setTheFilter={setTheFilter}/>}
            {showtheFilter==='filter-card' && <Filters showtheFilter={showtheFilter}setTheFilter={setTheFilter}/>}
            
      </>
    )
}
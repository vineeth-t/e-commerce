import './filter.css'
import { useDataFilter } from '../../contexts/index'
export function FilterTheData(){
 const{dispatch}= useDataFilter()
    return (
        <>
        <div className='filterCard'>
            <div className='filterCard-heading'>
            <h3 >Filters</h3>
            {/* <button className='filterCard-clear' onClick={()=>dispatch({type:'SORT',payload:'CLEAR_FILTER'})}>Clear</button> */}
            </div>
            <div className='filterCard-radio-btn'>
                <h4>SORT</h4>
                 <label>
                     <input type ='radio' name='PriceMeter' onChange={()=>dispatch({type:'SORT',payload:"HIGH_TO_LOW"})}/>
                        Price High To Low
                </label><br/>
                <label>
                     <input type ='radio' name='PriceMeter' onChange={()=>dispatch({type:'SORT',payload:"LOW_TO_HIGH"})}/>
                       Price Low To High
                </label>
            </div>
            <div className='filterCard-radio-btn'>
                <h4>Categories</h4>
                 <label>
                     <input type ='checkbox'/>
                        Phones
                </label>
                <label>
                     <input type ='checkbox' />
                       Cameras
                </label>
                <label>
                     <input type ='checkbox' />
                       Tshirts
                </label>
                <label>
                     <input type ='checkbox' />
                       Tabs
                </label>
                <label>
                     <input type ='checkbox' />
                       EarPhones
                </label>
            </div>
            <div className='filterCard-radio-btn'>
                <h4>Brands</h4>
                 <label>
                     <input type ='checkbox'/>
                        Apple
                </label>
                <label>
                     <input type ='checkbox' />
                       Google
                </label>
                <label>
                     <input type ='checkbox' />
                       Samsung
                </label>
                <label>
                     <input type ='checkbox' />
                       Marvel Tshirts
                </label>
                <label>
                     <input type ='checkbox' />
                       Jbl
                </label>
            </div>
            <div className='filterCard-radio-btn'>
                <h4>Others</h4>
                <label>
                     <input type ='checkbox' onChange={()=>dispatch({type:'FAST_DELIVERY'})} />
                       Fast Delivery
                </label>
                <label>
                     <input type ='checkbox' onChange={()=>dispatch({type:'INCLUDE_OUT_OF_STOCK'})} />
                       Include Out Of Stock
                </label>
            </div>
        </div>
        </>
    )
}
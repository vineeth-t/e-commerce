import { useDataFilter } from '../../contexts'
import './sort.css'
export function Sort({showtheFilter,setTheFilter}){
    console.log({showtheFilter})
    const{dispatch}= useDataFilter()
    return<>
        {showtheFilter==='sort-card'&&<div className='sort-card'>
        <label onClick={()=>dispatch({type:'SORT',payload:"HIGH_TO_LOW"})}>
                     <input type ='radio' name='PriceMeter' />
                        Price High To Low
                </label><br/>
                <label onClick={()=>dispatch({type:'SORT',payload:"LOW_TO_HIGH"})}>
                     <input type ='radio' name='PriceMeter' />
                       Price Low To High
        </label>
        <button className='sort-card-close' onClick={()=>setTheFilter('')}>X</button>
    </div>}
    {showtheFilter===''&& <div className='filterCard-radio-btn'>
        <h4>SORT</h4>
        <label onClick={()=>dispatch({type:'SORT',payload:"HIGH_TO_LOW"})}>
                     <input type ='radio' name='PriceMeter' />
                        Price High To Low
                </label><br/>
                <label onClick={()=>dispatch({type:'SORT',payload:"LOW_TO_HIGH"})}>
                     <input type ='radio' name='PriceMeter' />
                       Price Low To High
        </label>
    </div>

    }
   
    </>
}
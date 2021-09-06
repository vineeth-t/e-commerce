import './hero.css';
import { NavLink } from 'react-router-dom';
export function Hero(){
    return (
        <div>
            <div className='heroimg'>
            <h1>JungleClap</h1>
            <small>A One Stop Destination For Electronic Gadgets & fashion Products </small>
            <h1>Big Billon Day's are back</h1>
            <small>(14-16 of August)</small>
            <p>Offers On All Selected Items*</p>
            <NavLink to='/products'>
                <button className='btn-shp'>Shop Now</button>
             </NavLink>
            
            </div>
        </div>
    )
}
import './hero.css';
export function Hero(setState){
    return (
        <div>
            <div className='heroimg'>
            <h1>JungleClap</h1>
            <small>A One Stop Destination For Electronic Gadgets & fashion Products </small>
            <h1>Big Billon Day's are back</h1>
            <small>(14-16 of August)</small>
            <p>Offers On All Selected Items*</p>
            <button className='btn-shp' onClick={()=>setState('Products')}>Shop Now</button>
            </div>
        </div>
    )
}
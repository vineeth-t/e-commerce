import camera from './catergoryImages/cameras.jpg'
import fashion from './catergoryImages/fashion.jpg'
import music from './catergoryImages/Music.jpg'
import apple from './catergoryImages/apple.png'
import canon from './catergoryImages/canon.jpg'
import marvel from './catergoryImages/marvel.jpg'
import sony from './catergoryImages/sony.jpg'
import './productCatergory.css'
export function ShoppingCatergory(){
    return(
        <div>
            <h2 className='categories-heading'>Featured Categories</h2>
            <div className='item-catergories'>
                    <a className='catergory-img' style={{background:`url(${camera})no-repeat center/100% 100%`}}>
                        <span>Cameras</span>
                        <span>Flat 30%</span>
                    </a>
                    <a className='catergory-img' style={{background:`url(${fashion})no-repeat center/100% 100%`}}>
                    <span>Tshirts</span>
                        <span>Buy 3 @ Rs/-999</span>
                    </a>
                    <a className='catergory-img' style={{background:`url(${music})no-repeat center/100% 100%`}}>
                    <span>Earpods</span>
                        <span>1+1 Offer(Limted Offer)</span>
                    </a>
            </div>
            <div>
                <h2 className='categories-heading'>Featured Brands</h2>
                <div className='brand-types'>
                    <a className='catergory-img brand' style={{background:`url(${apple})no-repeat center/100% 100%`}}/>
                    <a className='catergory-img brand' style={{background:`url(${canon})no-repeat center/100% 100%`}}/>
                    <a className='catergory-img brand' style={{background:`url(${marvel})no-repeat center/100% 100%`}}/>
                    <a className='catergory-img brand' style={{background:`url(${sony})no-repeat center/100% 100%`}}/>
               
                </div>
            </div>

        </div>
    )
}
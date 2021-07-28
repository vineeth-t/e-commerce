import camera from './catergoryImages/cameras.jpg'
import fashion from './catergoryImages/fashion.jpg'
import laptop from './catergoryImages/laptops.jpg'
import music from './catergoryImages/Music.jpg'
import shoe from './catergoryImages/shoes.jpg'
import './productCatergory.css'
export function ShoppingCatergory(){
    return(
        <div class='item-catergories'>
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
    )
}
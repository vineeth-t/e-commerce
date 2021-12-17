import { useState } from 'react';
import { useStateContext } from '../../contexts/state-context';
import { NavLink,Link } from 'react-router-dom';
import './navBar.css';
import { Toast } from '..';
import { useAuth } from '../../contexts';
export function NavBar(){
  const{state:{toast,wishListItems,cartItems}}=useStateContext();
  const{authState:{login,userName}}=useAuth();
  const[hambug,sethambug]=useState('hambug');
    return (  
    <nav className='navbar'>
      {toast&&<Toast/>}
          <div className='navbar-right-of-mobile'>
                <button className='nav-hambug' onClick={()=>sethambug('hambug-view')}>
                <svg width="1.5em" height="2em" viewBox="0 0 48 48"><g fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M42 19H6M42 9H6M42 29H6M42 39H6"></path></g></svg>
                </button>
              <Link to='/' className='nav-link'>JC</Link>
                <div className={hambug}>
                      <div className='nav-hambug-profile'>
                          
                          <svg className='svg-profile' width="3em" height="3em" viewBox="0 0 24 24">
                            <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11z" fill="white">
                            </path>
                          </svg>
                          <span className='nav-user'>{userName}</span>
                        </div>
       
                        <div className='hambug-items'>
                            <NavLink end to='/' onClick={()=>{
                              sethambug('hambug')
                              }}>Home</NavLink>
                            <NavLink to='/products'  onClick={()=>{
                              sethambug('hambug')
                              }}>Products</NavLink>
                            <NavLink to='/login' onClick={()=>{
                              sethambug('hambug')
                              }}>Login</NavLink>
                            <button className='hambug-close' onClick={()=>sethambug('hambug')}>X</button>
                        </div>
                   </div>
              </div>
          <div className='navbar-component'>
            <NavLink  to='/' className='nav-link'>
                   JC
            </NavLink>
            <NavLink end to='/' className='nav-l'>
                 Home
            </NavLink>
            <NavLink to='/products'className='nav-l' >
              Products
            </NavLink>                   
          </div>
        <div className='navbar-left'>
        {login?<Link to='/profile'  className='navbar-items login'>    
                    <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11z" fill="currentColor"></path></svg>
                    <label>{userName}</label>
       </Link>:<Link to='/login'  className='navbar-items login'>    
                    <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11z" fill="currentColor"></path></svg>
                    <label>Login</label>
       </Link>}
       <Link to='/wishlist' className='navbar-items'>
                <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z" fill="currentColor"></path></svg>
                <small className='navbar-itemNo navbar-wishlist'>{wishListItems.length}</small>
                <label>Wishlist</label>          
        </Link>
        <Link to='/cart' className='navbar-items'>
                <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M16 18a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-9-1a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM18 6H4.273l2.547 6H15a.994.994 0 0 0 .8-.402l3-4h.001A1 1 0 0 0 18 6zm-3 7H6.866L6.1 14.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-1.75-2.97l.72-1.474L2.338 4H1V3h2l.849 2H18a2 2 0 0 1 1.553 3.26l-2.914 3.886A1.998 1.998 0 0 1 15 13z" fill="currentColor"></path></svg>
                <small className='navbar-itemNo'>{cartItems.length}</small>
                <label>Cart</label>   
       </Link>
            {/* <div>
              <button className='navbar-theme'>🌞</button>
            </div> */}
        </div>
      </nav>
    )
}
import React, { useReducer, useState } from 'react'
import { assets } from '../assets/assets.jsx'
import SearchBar from './SearchBar.jsx';
import { initialActive, NavReducer } from './NavReducer.jsx';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../Store/useCartStore.jsx';
// import { useCartStore } from '../';
const NavBar = ({ onCartClick }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [state, dispatch] = useReducer(NavReducer, initialActive);
  const navigate = useNavigate();
  const { cartItems } = useCartStore();
  const [showSideBar, setShowSideBar] = useState(false);
  const handleNavClick = (page) => {
    dispatch({ type: 'SET_ACTIVE', payload: page });
    navigate(`/${page.toLowerCase()}`);
  }

  return (
    // <div className='md:px-26 px-8 sticky top-0 z-50 bg-white flex w-full items-center justify-between shadow-md py-3'>
    //     <div className='logo'><img src={assets.logo} alt="" /></div>
    //     <div className='gap-5 md:inline-flex hidden '>
    //         <ul className='flex  gap-5'>
    //             <li className={`cursor-pointer ${state === 'Home' ? 'border-b-[1px] text-orange-600 ' : 'hover:text-orange-600'}`} onClick={() => handleNavClick("Home")}>Home</li>
    //             <li className={`cursor-pointer ${state === 'Shop' ? 'border-b-[1px] text-orange-600 ' : 'hover:text-orange-600'}`} onClick={() => handleNavClick("Shop")}>Shop</li>
    //             <li className={`cursor-pointer ${state === 'About' ? 'border-b-[1px] text-orange-600 ' : 'hover:text-orange-600'}`} onClick={() => handleNavClick("About")}>About Us</li>
    //             <li className={`cursor-pointer ${state === 'Contact' ? 'border-b-[1px] text-orange-600 ' : 'hover:text-orange-600'}`} onClick={() => handleNavClick("Contact")}>Contact</li>
    //         </ul>
    //         <button className='px-2 text-[12px] border-[1px] cursor-pointer hover:bg-gray-100 transition-all rounded-full border-gray-500'>Seller Dashboard</button>
    //     </div>
    //     <div className='flex md:gap-8 gap-6 relative w-fit items-center'>
    //         <SearchBar show={showSearch} />
    //         <div className='w-10 h-9 flex items-center justify-center rounded-full hover:bg-gray-300 hover:shadow-2xl p-1'><img src={assets.profile} className='w-7 h-7 cursor-pointer' alt="" /></div>
    //         <div className='w-10 h-9 flex items-center justify-center rounded-full hover:bg-gray-300 hover:shadow-2xl p-1'><img src={assets.cart} alt="" className='w-7 h-7 cursor-pointer' /></div>
    //         <div className='w-10 h-9 flex items-center justify-center rounded-full hover:bg-gray-300 hover:shadow-2xl p-1'>  <img onClick={() => setShowSearch(prev => !prev)} src={assets.search_icon} className='w-8  cursor-pointer' alt="" /></div>
    //     </div>
    // </div>
    <div className='md:px-10 px-5 sticky top-0 z-50 bg-white w-full flex flex-wrap items-center justify-between shadow-md py-3 gap-4'>

      {/* Logo */}
      <div className='logo'>
        <img src={assets.logo} alt="logo" className="w-24" />
      </div>

      {/* Navigation Items (hide on small screens) */}
      <div className='gap-5 md:inline-flex hidden'>
        <ul className='flex gap-5 flex-wrap text-sm'>
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${state === item
                ? 'border-b-[1px] text-orange-600'
                : 'hover:text-orange-600'
                }`}
              onClick={() => handleNavClick(item)}
            >
              {item === 'About' ? 'About Us' : item}
            </li>
          ))}
        </ul>
        <button className='px-3 text-[12px] border border-gray-500 rounded-full hover:bg-gray-100'>
          Seller Dashboard
        </button>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        <SearchBar show={showSearch} />
        <img
          src={assets.profile}
          className='w-7 h-7 cursor-pointer hover:bg-gray-200 p-1'
          alt="profile"
        />
        <div className='relative'>
          <div><p>{cartItems.length>0 && (  <div className='absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
    {cartItems.length}
  </div>)}</p></div>
          <img
            src={assets.cart}
            className='w-7 h-7  cursor-pointer hover:bg-gray-200 p-1'
            alt="cart"
            onClick={onCartClick}
          />
        </div>
        <img
          onClick={() => setShowSearch((prev) => !prev)}
          src={assets.search_icon}
          className='w-7 h-7 cursor-pointer hover:rotate-90 transition-transform duration-300'
          alt="search"
        />
      </div>
    </div>

  )
}

export default NavBar

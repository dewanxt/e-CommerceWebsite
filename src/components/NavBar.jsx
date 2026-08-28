import React, { useState } from 'react';
import Container from './Container';
import Logo from '../assets/Logo.png';
import { IoHeartOutline, IoMenu, IoClose } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { NavLink, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { FiUser } from "react-icons/fi";


const NavBar = () => {
  const navigate = useNavigate();
  
  // State management for UI interactions
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Get cart and wishlist data from Redux store
  const cart = useSelector(state => state.products.Cart);
  const wishList = useSelector(state => state.products.WishList);

  
  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
    { label: 'About', path: '/about' },
    { label: 'Sign Up', path: '/signup' },
  ];

  /**
   * Toggle mobile menu visibility
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Close mobile menu
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * Handle navigation with menu closure
   * @param {string} path - Route path to navigate to
   */
  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  /**
   * Toggle mobile search bar visibility
   */
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  return (
    <div className='border-b-2 border-gray-200 relative'>
      <Container>
        <div className='flex items-center justify-between py-4 lg:py-7'>
          
          {/* Mobile menu toggle button */}
          <button 
            onClick={toggleMenu}
            className='lg:hidden text-3xl cursor-pointer hover:text-primary transition-colors'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>

          {/* Brand logo */}
          <div className='flex items-center gap-3'>
            <h1 
              onClick={() => handleNavigation("/")} 
              className='text-2xl lg:text-3xl font-bold cursor-pointer hover:text-primary transition-colors'
            >
              Exclusive
            </h1>
            {/* Alternative image logo */}
            {/* <img src={Logo} alt="Exclusive Logo" /> */}
          </div>

          {/* Desktop navigation links */}
          <nav aria-label="Main navigation">
            <ul className='hidden lg:flex gap-12 text-xl'>
              {navigationItems.map((item) => (
                <li 
                  key={item.path}
                  onClick={() => navigate(item.path)} 
                  className='cursor-pointer group'
                >
                  <span className='relative inline-block'>
                    {item.label}
                    {/* Animated underline on hover */}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search and action icons */}
          <div className='flex items-center gap-2 sm:gap-4 lg:gap-6'>
            
            {/* Desktop search bar */}
            <div className='hidden md:block relative pl-5 py-2.5 bg-[#F5F5F5] rounded'>
              <input 
                type="text" 
                className='pr-12 bg-transparent focus:outline-none focus:ring-0' 
                placeholder='What are you looking for?'
                aria-label="Search products"
              />
              <HiMiniMagnifyingGlass 
                className='absolute top-1/2 -translate-y-1/2 right-3 text-2xl cursor-pointer hover:text-primary transition-colors'
                aria-hidden="true"
              />
            </div>

            {/* Mobile search toggle */}
            <button 
              onClick={toggleSearch}
              className='md:hidden text-2xl cursor-pointer hover:text-primary transition-colors'
              aria-label={isSearchOpen ? 'Close search' : 'Open search'}
              aria-expanded={isSearchOpen}
            >
              <HiMiniMagnifyingGlass />
            </button>

            {/* Action icons: wishlist, cart, user */}
            <div className='flex items-center gap-3 sm:gap-4 '>
              
              {/* Wishlist icon with count */}
              <div 
                onClick={() => navigate("/WishList")} 
                className='relative cursor-pointer'
                role="button"
                aria-label={`Wishlist (${wishList.length} items)`}
              >
                <IoHeartOutline className='text-2xl sm:text-3xl hover:text-primary transition-colors' />
                {wishList.length > 0 && (
                  <span className='text-white bg-primary size-4 rounded-full text-xs flex justify-center items-center absolute -top-1 -right-1'>
                    {wishList.length}
                  </span>
                )}
              </div>

              {/* Cart icon with count */}
              <div 
                onClick={() => handleNavigation("/Cart")} 
                className='relative cursor-pointer'
                role="button"
                aria-label={`Cart (${cart.length} items)`}
              >
                <BsCart3 className='text-2xl sm:text-3xl hover:text-primary transition-colors' />
                {cart.length > 0 && (
                  <span className='text-white bg-primary size-4 rounded-full text-xs flex justify-center items-center absolute -top-1 -right-1'>
                    {cart.length}
                  </span>
                )}
              </div>

              {/* User account icon - now visible on all screens */}
              <div 
                onClick={()=> handleNavigation("/Login")}
                className='cursor-pointer'
                role="button"
                aria-label="User account"
              >
                <FiUser className='text-2xl sm:text-3xl hover:text-primary transition-colors' />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search bar with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isSearchOpen ? 'max-h-20 opacity-100 pb-4 px-4' : 'max-h-0 opacity-0'
        }`}>
          <div className='relative pl-5 py-2.5 bg-[#F5F5F5] rounded w-full'>
            <input 
              type="text" 
              className='pr-12 bg-transparent focus:outline-none focus:ring-0 w-full' 
              placeholder='What are you looking for?'
              autoFocus={isSearchOpen}
              aria-label="Search products"
            />
            <HiMiniMagnifyingGlass className='absolute top-1/2 -translate-y-1/2 right-3 text-2xl cursor-pointer' />
          </div>
        </div>
      </Container>

      {/* Mobile menu overlay with slide animation */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
        
        {/* Semi-transparent overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        
        {/* Sliding menu panel */}
        <div 
          className={`absolute left-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className='py-8 px-6 h-full flex flex-col'>
            {/* Menu header */}
            <div className='flex justify-between items-center mb-8'>
              <h2 className='text-2xl font-bold'>Menu</h2>
              <button 
                onClick={closeMenu} 
                className='text-3xl cursor-pointer hover:text-primary transition-colors'
                aria-label="Close menu"
              >
                <IoClose />
              </button>
            </div>
            
            {/* Mobile navigation links */}
            <nav aria-label="Mobile navigation">
              <ul className='flex flex-col gap-2 text-xl'>
                {navigationItems.map((item) => (
                  <li 
                    key={item.path}
                    onClick={() => handleNavigation(item.path)} 
                    className='cursor-pointer hover:bg-gray-50 hover:text-primary transition-all duration-200 py-3 px-4 rounded-lg'
                    role="button"
                    tabIndex={0}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar
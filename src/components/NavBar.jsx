import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';
import { IoHeartOutline, IoMenu, IoClose } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useNavigate, useLocation } from 'react-router'; 
import { useSelector } from 'react-redux';
import { FiUser } from "react-icons/fi";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const cart = useSelector(state => state.products.Cart);
  const wishList = useSelector(state => state.products.WishList);
  const products = useSelector(state => state.products.value);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
    { label: 'Sign Up', path: '/signup' },
  ];

  const searchTermLower = searchTerm.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTermLower) ||
    product.category.toLowerCase().includes(searchTermLower) ||
    product.brand?.toLowerCase().includes(searchTermLower)
  ).slice(0, 5);

  const categories = [...new Set(products.map(product => product.category))];
  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTermLower)
  ).slice(0, 3);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle body class to hide banner elements
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => document.body.classList.remove('mobile-menu-open');
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  const handleLogoClick = () => {
    closeMenu();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleAboutClick = () => {
    closeMenu();
    if (location.pathname === '/') {
      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleProductClick = (productId) => {
    setSearchTerm('');
    setShowSuggestions(false);
    setIsSearchOpen(false);
    navigate(`/product/${productId}`);
  };

  const handleCategoryClick = (category) => {
    setSearchTerm('');
    setShowSuggestions(false);
    setIsSearchOpen(false);
    navigate(`/shop?category=${category}`);
  };

  return (
    <div className='sticky top-0 z-50 border-b-2 border-gray-200 bg-white relative'>
      <Container>
        <div className='flex items-center justify-between py-4 lg:py-7'>
          
          <button 
            onClick={toggleMenu}
            className='lg:hidden text-3xl cursor-pointer hover:text-primary transition-colors z-0'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>

          <div className='flex items-center gap-3'>
            <h1 
              onClick={handleLogoClick} 
              className='text-2xl lg:text-3xl font-bold cursor-pointer'
            >
              Exclusive
            </h1>
          </div>

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
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </li>
              ))}
              
              <li 
                onClick={handleAboutClick} 
                className='cursor-pointer group'
              >
                <span className='relative inline-block'>
                  About
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                </span>
              </li>
            </ul>
          </nav>

          <div className='flex items-center gap-2 sm:gap-4 lg:gap-6'>
            
            <div className='hidden md:block relative' ref={searchRef}>
              <div className='relative pl-5 py-2.5 bg-[#F5F5F5] rounded'>
                <input 
                  type="text" 
                  className='pr-12 bg-transparent focus:outline-none focus:ring-0' 
                  placeholder='Search products or categories...'
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(true)}
                  aria-label="Search products"
                />
                <HiMiniMagnifyingGlass 
                  className='absolute top-1/2 -translate-y-1/2 right-3 text-2xl cursor-pointer hover:text-primary transition-colors'
                  aria-hidden="true"
                />
              </div>

              {showSuggestions && searchTerm && (filteredProducts.length > 0 || filteredCategories.length > 0) && (
                <div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto'>
                  {filteredCategories.length > 0 && (
                    <div className='px-4 py-2'>
                      <p className='text-xs font-semibold text-gray-500 uppercase mb-1'>Categories</p>
                      {filteredCategories.map((category, index) => (
                        <div
                          key={`category-${index}`}
                          onClick={() => handleCategoryClick(category)}
                          className='flex items-center gap-2 px-2 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors rounded'
                        >
                          <span className='text-sm capitalize'>{category}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {filteredProducts.length > 0 && (
                    <div className='px-4 py-2 border-t border-gray-100'>
                      <p className='text-xs font-semibold text-gray-500 uppercase mb-1'>Products</p>
                      {filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className='flex items-center gap-3 px-2 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors rounded'
                        >
                          <img 
                            src={product.thumbnail} 
                            alt={product.title}
                            className='w-8 h-8 object-cover rounded'
                          />
                          <div className='flex-1 min-w-0'>
                            <p className='text-sm font-medium truncate'>{product.title}</p>
                            <p className='text-xs text-gray-500'>${product.price} • {product.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button 
              onClick={toggleSearch}
              className='md:hidden text-2xl cursor-pointer hover:text-primary transition-colors'
              aria-label={isSearchOpen ? 'Close search' : 'Open search'}
              aria-expanded={isSearchOpen}
            >
              <HiMiniMagnifyingGlass />
            </button>

            <div className='flex items-center gap-3 sm:gap-4 '>
              
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

        <div className={`md:hidden relative transition-all duration-300 ease-in-out ${
          isSearchOpen ? 'max-h-80 opacity-100 pb-4 px-4' : 'max-h-0 opacity-0'
        }`}>
          <div className='relative' ref={searchRef}>
            <div className='relative pl-5 py-2.5 bg-[#F5F5F5] rounded w-full'>
              <input 
                type="text" 
                className='pr-12 bg-transparent focus:outline-none focus:ring-0 w-full' 
                placeholder='Search products or categories...'
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setShowSuggestions(true)}
                autoFocus={isSearchOpen}
                aria-label="Search products"
              />
              <HiMiniMagnifyingGlass className='absolute top-1/2 -translate-y-1/2 right-3 text-2xl cursor-pointer' />
            </div>

            {showSuggestions && searchTerm && (filteredProducts.length > 0 || filteredCategories.length > 0) && (
              <div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-[100] max-h-56 overflow-y-auto'>
                {filteredCategories.length > 0 && (
                  <div className='px-3 py-1.5'>
                    <p className='text-[10px] font-semibold text-gray-500 uppercase mb-0.5'>Categories</p>
                    {filteredCategories.map((category, index) => (
                      <div
                        key={`category-${index}`}
                        onClick={() => handleCategoryClick(category)}
                        className='flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-50 transition-colors rounded'
                      >
                        <span className='text-xs capitalize'>{category}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {filteredProducts.length > 0 && (
                  <div className='px-3 py-1.5 border-t border-gray-100'>
                    <p className='text-[10px] font-semibold text-gray-500 uppercase mb-0.5'>Products</p>
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className='flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-50 transition-colors rounded'
                      >
                        <img 
                          src={product.thumbnail} 
                          alt={product.title}
                          className='w-6 h-6 object-cover rounded'
                        />
                        <div className='flex-1 min-w-0'>
                          <p className='text-xs font-medium truncate'>{product.title}</p>
                          <p className='text-[10px] text-gray-500'>${product.price} • {product.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* CHANGED: z-50 to z-[999] so it covers everything */}
      <div className={`lg:hidden fixed inset-0 z-[999] transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
        
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        
        <div 
          className={`absolute left-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className='py-8 px-6 h-full flex flex-col'>
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
                
                <li 
                  onClick={handleAboutClick} 
                  className='cursor-pointer hover:bg-gray-50 hover:text-primary transition-all duration-200 py-3 px-4 rounded-lg'
                  role="button"
                  tabIndex={0}
                >
                  About
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar
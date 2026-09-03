import React from 'react';
import Container from './Container';
import { useNavigate } from 'react-router';

/**
 * Header Component
 * 
 * Displays the top announcement bar with:
 * - Promotional message and shop link
 * - Language selection dropdown
 * - Responsive layout for mobile and desktop
 */
const Header = () => {
  const navigate = useNavigate();

  /**
   * Navigation handler for shop link
   * Redirects user to the shop page
   */
  const handleShopNavigation = () => {
    navigate('/shop');
  };

  /**
   * Language options for the dropdown
   * Can be extended to support additional languages
   */
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'bn', label: 'Bangla' },
    { value: 'tr', label: 'Turkish' },
    { value: 'it', label: 'Italian' },
    { value: 'el', label: 'Greek' },
    { value: 'es', label: 'Spanish' },
    { value: 'ru', label: 'Russian' },
  ];

  return (
    <div className="bg-black text-white py-3">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0">
          
          {/* Spacer div for desktop layout balance */}
          <div className="hidden lg:block" aria-hidden="true" />

          {/* Promotional message - Entire block is clickable on mobile */}
          <div 
            onClick={handleShopNavigation}
            className="flex flex-col sm:flex-row items-center text-center px-4 sm:px-0 cursor-pointer group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleShopNavigation()}
            aria-label="Shop now for summer sale"
          >
            <p className="text-sm">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            
            {/* Shop now link */}
            <span className="underline font-bold ml-0 sm:ml-2 mt-1 sm:mt-0 group-hover:text-gray-300 transition-colors">
              ShopNow
            </span>
          </div>

          {/* Language selector */}
          <select
            name="language"
            id="language-selector"
            className="bg-black text-white text-sm cursor-pointer border border-gray-700 rounded px-2 py-1 hover:border-gray-500 transition-colors w-full sm:w-auto max-w-[150px]"
            aria-label="Select language"
            defaultValue="en"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </Container>
    </div>
  );
};

export default Header
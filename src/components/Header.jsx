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

          {/* Promotional message */}
          <p className="text-sm gap-2 flex flex-col sm:flex-row items-center text-center px-2">
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            
            {/* Shop navigation link */}
            <span
              onClick={handleShopNavigation}
              className="underline font-bold cursor-pointer hover:text-gray-300 transition-colors"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleShopNavigation()}
              aria-label="Shop now for summer sale"
            >
              ShopNow
            </span>
          </p>

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

export default Header;
import React from 'react';
import Container from '../components/Container';
import { useNavigate } from 'react-router';
import BreadCrump from '../components/BreadCrump';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='pt-20 pb-40'>
      <Container>
        
        <BreadCrump/>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[80px] sm:text-[120px] lg:text-[160px] font-bold leading-none mb-8">
            404 Not Found
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-16">
            Your visited page not found. You may go home page.
          </p>

          <button 
            onClick={() => navigate("/")}
            className="bg-[#DB4444] text-white text-base font-medium py-4 px-12 rounded-sm cursor-pointer hover:bg-red-700 transition-colors"
          >
            Back to home page
          </button>
        </div>

      </Container>
    </div>
  );
};

export default NotFound;
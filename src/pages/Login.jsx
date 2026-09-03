import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../components/Container';
import LoginImg from '../assets/Side Image.png';
import BreadCrump from '../components/BreadCrump';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) {
      toast.error("Please enter your email or phone number!");
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter your password!");
      return;
    }
    
    // Mock password check
    const correctPassword = "password123"; 
    if (password !== correctPassword) {
      toast.error("Incorrect password. Please try again!");
      return;
    }

    toast.success("Login successful! Welcome back.");
    setEmailOrPhone('');
    setPassword('');
  };

  return (
    <>
      <div className="py-10">
        <Container>
          <BreadCrump/>
          {/* Changed to flex-row with items-center and added a specific gap */}
          <div className='flex items-center gap-20 lg:gap-32'>
            
            {/* Left Image Column */}
            <div className="hidden lg:block w-1/2">
              <img src={LoginImg} alt="Login illustration" className="w-full h-auto object-contain" />
            </div>

            {/* Right Form Column */}
            <div className="w-full lg:w-1/2 flex items-center justify-center font-sans">
              <div className="w-full max-w-md">
                
                {/* Heading - Fixed size and weight */}
                <h1 className="text-4xl font-medium text-gray-900 mb-4">
                  Log in to Exclusive
                </h1>
                
                {/* Subheading - Fixed size */}
                <p className="text-base text-gray-900 mb-12">
                  Enter your details below
                </p>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-8">
                  
                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Email or Phone Number"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-b border-gray-300 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                  </div>

                  {/* Actions Row - Added margin-top */}
                  <div className="flex items-center justify-between pt-2">
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="bg-[#DB4444] text-white text-base font-medium py-3 px-12 rounded hover:bg-[#c93c3c] transition-colors"
                    >
                      Log In
                    </button>

                    {/* Forget Password Link */}
                    <a
                      href="#"
                      className="text-[#DB4444] text-base font-medium hover:underline"
                    >
                      Forget Password?
                    </a>
                    
                  </div>
                </form>

              </div>
            </div>
          </div>
        </Container>
      </div> 

      {/* Toastify Container */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Login;
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the official colored Google icon
import { FcGoogle } from "react-icons/fc"; 

import Container from '../components/Container';
import SignUpImg from '../assets/Side Image.png';
import { useNavigate } from 'react-router';
import BreadCrump from '../components/BreadCrump';

const SignUp = () => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
    const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name!");
      return;
    }
    if (!emailOrPhone.trim()) {
      toast.error("Please enter your email or phone number!");
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter your password!");
      return;
    }

    toast.success("Account created successfully!");
    setName('');
    setEmailOrPhone('');
    setPassword('');
  };

  return (
    <>
      <div className="py-10">
        <Container>
          <BreadCrump/>
          <div className='flex items-center gap-20 lg:gap-32'>
            
            {/* Left Image */}
            <div className="hidden lg:block w-1/2">
              <img src={SignUpImg} alt="Sign up illustration" className="w-full h-auto object-contain" />
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center font-sans">
              <div className="w-full max-w-md">
                
                <h1 className="text-4xl font-medium text-gray-900 mb-4">
                  Create an account
                </h1>
                <p className="text-base text-gray-900 mb-12">
                  Enter your details below
                </p>

                <form onSubmit={handleSignUp} className="space-y-8">
                  
                  {/* Name Input */}
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  />

                  {/* Email or Phone Input */}
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  />

                  {/* Password Input */}
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  />

                  {/* Create Account Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#DB4444] text-white text-base font-medium py-3.5 rounded hover:bg-[#c93c3c] transition-colors"
                    >
                      Create Account
                    </button>
                  </div>

                  {/* FIXED GOOGLE BUTTON - Matches image perfectly */}
                  <div>
                    <button
                      type="button"
                      className="w-full bg-white border border-gray-300 text-gray-900 text-base font-medium py-3.5 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
                    >
                      {/* Colored Google Icon */}
                      <FcGoogle className="w-6 h-6" />
                      Sign up with Google
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center pt-2">
                    <span className="text-base text-gray-500">Already have account? </span>
                    <a href="#" onClick={()=> handleNavigation("/Login")} className="text-base text-gray-900 font-medium underline underline-offset-4 hover:text-black">
                      Log In
                    </a>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </Container>
      </div> 

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

export default SignUp
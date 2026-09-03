import React from 'react'
import Container from './Container'
import FooterQrcode from '../assets/FooterQrcode.png'
import PlayStore from '../assets/PlayStore.png'
import AppStore from '../assets/AppStore.png'
import { VscSend } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      {/* Added id="footer" here */}
      <div id="footer" className='pt-10 sm:pt-20 lg:pt-35'>
        <div className='bg-black text-white'>
          <Container>
            {/* Main footer content */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 xl:gap-21.75 pt-10 sm:pt-14 lg:pt-20 pb-8 sm:pb-12 lg:pb-15 border-b border-neutral-800'>
              
              {/* Newsletter subscription section */}
              <div className='space-y-4 sm:col-span-2 lg:col-span-1'>
                <ul className='space-y-3'>
                  <li className='text-2xl font-bold'>Exclusive</li>
                  <li className='text-[18px] sm:text-[20px] font-medium'>Subscribe</li>
                  <li className='text-sm sm:text-base text-gray-400'>Get 10% off your first order</li>
                </ul>
                
                {/* Email input with send button */}
                <div className='relative pl-4 py-2.5 sm:py-3 bg-black border border-white rounded-md max-w-xs'>
                  <input 
                    type="text" 
                    className='pr-10 focus:outline-none focus:ring-0 text-[#FAFAFA] bg-transparent w-full text-sm sm:text-base' 
                    placeholder='Write your email'
                    aria-label="Email for newsletter"
                  />
                  <VscSend 
                    className='absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 text-xl sm:text-2xl cursor-pointer hover:text-primary transition-colors'
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Support contact information */}
              <div className='space-y-3'>
                <h2 className='text-lg sm:text-xl font-semibold mb-4'>Support</h2>
                <ul className='space-y-3 text-sm sm:text-base text-gray-400'>
                  <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>exclusive@gmail.com</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>+88015-88888-9999</li>
                </ul>
              </div>

              {/* Account links */}
              <div className='space-y-3'>
                <h2 className='text-lg sm:text-xl font-semibold mb-4'>Account</h2>
                <ul className='space-y-3 text-sm sm:text-base text-gray-400'>
                  <li className='hover:text-white transition-colors cursor-pointer'>My Account</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>Login / Register</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>Cart</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>Wishlist</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>Shop</li>
                </ul>
              </div>

              {/* Quick links */}
              <div className='space-y-3'>
                <h2 className='text-lg sm:text-xl font-semibold mb-4'>Quick Link</h2>
                <ul className='space-y-3 text-sm sm:text-base text-gray-400'>
                  <li className='hover:text-white transition-colors cursor-pointer'>Privacy Policy</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>Terms Of Use</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>FAQ</li>
                  <li className='hover:text-white transition-colors cursor-pointer'>Contact</li>
                </ul>
              </div>

              {/* App download and social media section */}
              <div className='space-y-5 sm:col-span-2 lg:col-span-1'>
                <div>
                  <h2 className='text-lg sm:text-xl font-semibold mb-2'>Download App</h2>
                  <p className='text-sm text-gray-400'>Save $3 with App New User Only</p>
                </div>
                
                {/* App store buttons */}
                <div className='flex gap-3 sm:gap-4'>
                  <img src={FooterQrcode} alt="QR Code for app download" className='w-20 h-20 sm:w-24 sm:h-24 lg:w-auto lg:h-auto object-contain' />
                  <div className='space-y-3 sm:space-y-5'>
                    <img src={PlayStore} alt="Download from Play Store" className='w-24 sm:w-28 lg:w-auto cursor-pointer hover:opacity-80 transition-opacity' />
                    <img src={AppStore} alt="Download from App Store" className='w-24 sm:w-28 lg:w-auto cursor-pointer hover:opacity-80 transition-opacity' />
                  </div>
                </div>

                {/* Social media links */}
                <div className='flex gap-4 sm:gap-6 text-xl sm:text-2xl lg:text-3xl'>
                  <GrFacebookOption className='cursor-pointer hover:text-primary transition-colors' aria-label="Facebook" />
                  <RiTwitterLine className='cursor-pointer hover:text-primary transition-colors' aria-label="Twitter" />
                  <RiInstagramLine className='cursor-pointer hover:text-primary transition-colors' aria-label="Instagram" />
                  <FaLinkedinIn className='cursor-pointer hover:text-primary transition-colors' aria-label="LinkedIn" />
                </div>
              </div>
            </div>

            {/* Copyright notice */}
            <div className='flex justify-center items-center gap-3 sm:gap-5 text-neutral-700 text-sm sm:text-[16px] pt-4 pb-6'>
              <FaRegCopyright className='text-base sm:text-lg' aria-hidden="true" />
              <p>Copyright Rimel 2022. All right reserved</p>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Footer
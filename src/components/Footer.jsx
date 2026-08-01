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
      <div className='pt-35'>
        <div className='bg-black text-white'>
          <Container>
          <div className='flex justify-center pt-20 pb-15 gap-21.75 border-b border-neutral-800 '>
            <div className='footerBox'>
              <ul>
                <li>Exclusive</li>
                <li className='text-[20px]'>Subscribe</li>
                <li>Get 10% off your first order</li>
              </ul>
              <div className='relative pl-4 py-3 bg-black border border-white rounded-md'>
                <input type="text" className='pr-8 focus:outline-none focus:ring-0 text-[#FAFAFA]' placeholder='Write your email' />
                <VscSend className='absolute top-3 right-4 text-2xl' />
                

              </div>
            </div>

            <div className='footerBox'>
              <ul>
                <li>Support</li>
                <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </div>

            <div className='footerBox'>
              <ul>
                <li>Account</li>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>

            <div className='footerBox'>
              <ul>
                <li>Quick Link</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className='footerBox'>
              <ul>
                <li>Download App</li>
                <li>Save $3 with App New User Only</li>
              </ul>
              <div className='flex gap-2'>
                <img src={FooterQrcode} alt="" />
                <div className='space-y-5'>
                  <img src={PlayStore} alt="" />
                  <img src={AppStore} alt="" />
                </div>

              </div>

              <div className='flex gap-6 text-3xl'>
                <GrFacebookOption />

                <RiTwitterLine />
                <RiInstagramLine />
                <FaLinkedinIn />




              </div>

            </div>

          </div>

          <div className='flex justify-center items-center gap-5 text-neutral-700 text-[16px] pt-4 pb-6'>
            <div>
            <FaRegCopyright />
            </div>
            <p>Copyright Rimel 2022. All right reserved</p>
          </div>

        </Container>
        </div>
        
      </div>
    </>
  )
}

export default Footer

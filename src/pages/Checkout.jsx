import React, { useState } from 'react';
import Container from '../components/Container';
import BreadCrump from '../components/BreadCrump';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// React Icons for payment methods
import { SiVisa, SiMastercard, SiPaypal, SiAmericanexpress } from "react-icons/si";
import { FaCheck } from "react-icons/fa6";

const Checkout = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.products.Cart);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [saveInfo, setSaveInfo] = useState(true);

  // Calculate totals
  const subtotal = data.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);
  
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.firstName || !formData.streetAddress || !formData.townCity || !formData.phoneNumber || !formData.emailAddress) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Success
    toast.success("Order placed successfully!");
    
    // Redirect to home or order confirmation after short delay
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className='mt-20 mb-35 px-4 sm:px-0'> {/* Added side padding for mobile */}
      <Container>
        <BreadCrump />

        <h1 className='text-3xl sm:text-4xl font-semibold mt-10 md:mt-20 mb-8 md:mb-12'>Billing Details</h1>

        {/* Form Layout: Stack on mobile, Row on lg screens */}
        <form onSubmit={handlePlaceOrder} className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-20'>
          
          {/* Left Column: Billing Form */}
          <div className='w-full lg:w-1/2 space-y-6 md:space-y-8'>
            
            <div>
              <label className="block mb-2">First Name<span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400" 
              />
            </div>

            <div>
              <label className="block mb-2">Company Name</label>
              <input 
                type="text" 
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400" 
              />
            </div>

            <div>
              <label className="block mb-2">Street Address<span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400" 
              />
            </div>

            <div>
              <label className="block mb-2">Apartment, floor, etc. (optional)</label>
              <input 
                type="text" 
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400" 
              />
            </div>

            <div>
              <label className="block mb-2">Town/City<span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400" 
              />
            </div>

            <div>
              <label className="block mb-2">Phone Number<span className="text-red-500">*</span></label>
              <input 
                type="tel" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400" 
              />
            </div>

            <div>
              <label className="block mb-2">Email Address<span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400" 
              />
            </div>

            {/* Save Info Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSaveInfo(!saveInfo)}
                className={`w-6 h-6 rounded-sm flex items-center justify-center border transition-colors cursor-pointer ${
                  saveInfo ? 'bg-[#DB4444] border-[#DB4444] text-white' : 'border-gray-400 bg-white'
                }`}
              >
                {saveInfo && <FaCheck size={12} />}
              </button>
              <span className="text-sm sm:text-lg">Save this information for faster check-out next time</span>
            </div>
          </div>

          {/* Right Column: Order Summary & Payment */}
          <div className='w-full lg:w-1/2'>
            
            {/* Product List */}
            <div className='space-y-6 mb-8'>
              {data.map((item) => (
                <div key={item.id} className='flex justify-between items-center'>
                  <div className='flex items-center gap-4'>
                    <img src={item.thumbnail} alt={item.title} className='w-14 h-14 object-cover rounded-sm' />
                    <span className='text-base font-medium'>{item.title}</span>
                  </div>
                  <span className='text-base font-medium'>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className='space-y-4 mb-8'>
              <div className='flex justify-between items-center pb-4 border-b border-gray-300'>
                <span className='text-lg font-medium'>Subtotal:</span>
                <span className='text-lg font-medium'>${subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between items-center pb-4 border-b border-gray-300'>
                <span className='text-lg font-medium'>Shipping:</span>
                <span className='text-lg font-medium'>Free</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg font-medium'>Total:</span>
                <span className='text-lg font-medium'>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className='space-y-4 mb-8'>
              
              {/* Bank */}
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
                <div className='flex items-center gap-4'>
                  <button 
                    type="button" 
                    onClick={() => setPaymentMethod('bank')}
                    className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'bank' ? 'border-black' : 'border-gray-400'}`}
                  >
                    {paymentMethod === 'bank' && (
                      <div className="w-2.5 h-2.5 bg-black rounded-full mx-auto mt-[1px]"></div>
                    )}
                  </button>
                  <span className='text-lg'>Bank</span>
                </div>
                
                {/* Payment Icons */}
                <div className='flex items-center gap-2 text-2xl sm:text-3xl text-gray-800'>
                  <SiVisa className="text-[#1A1F71]" />
                  <SiMastercard className="text-[#EB001B]" />
                  <SiPaypal className="text-[#003087]" />
                  <SiAmericanexpress className="text-[#2E77BC]" />
                </div>
              </div>

              {/* Cash on Delivery */}
              <div className='flex items-center gap-4'>
                <button 
                  type="button" 
                  onClick={() => setPaymentMethod('cash')}
                  className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'cash' ? 'border-black' : 'border-gray-400'}`}
                >
                  {paymentMethod === 'cash' && (
                    <div className="w-2.5 h-2.5 bg-black rounded-full mx-auto mt-[1px]"></div>
                  )}
                </button>
                <span className='text-lg'>Cash on delivery</span>
              </div>
            </div>

            {/* Coupon & Place Order */}
            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <input 
                type="text" 
                placeholder='Coupon Code' 
                className='w-full border border-gray-400 px-4 py-3 rounded-sm outline-none focus:border-gray-600' 
              />
              <button type="button" className='bg-[#DB4444] text-white px-8 py-3 rounded-sm cursor-pointer hover:bg-red-700 transition-colors whitespace-nowrap'>
                Apply Coupon
              </button>
            </div>

            <button type="submit" className='w-full sm:w-auto bg-[#DB4444] text-white px-12 py-3 rounded-sm cursor-pointer hover:bg-red-700 transition-colors'>
              Place Order
            </button>
          </div>
        </form>
      </Container>
      
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
    </div>
  )
}

export default Checkout
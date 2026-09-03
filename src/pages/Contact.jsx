import React, { useState } from 'react';
import Container from '../components/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// React Icons
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import BreadCrump from '../components/BreadCrump';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields!");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className='pt-20 pb-40'>
      <Container>
        
        {/* Breadcrumb */}
       <BreadCrump/>

        {/* Main Contact Layout */}
        <div className="flex gap-8 mt-20">
          
          {/* Left Card: Contact Info */}
          <div className="w-1/3 p-10 bg-white rounded-sm border border-gray-200 shadow-sm h-fit">
            
            {/* Call To Us */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 bg-[#DB4444] rounded-full flex justify-center items-center text-white shrink-0">
                <FaPhoneAlt size={18} />
              </div>
              <h3 className="text-lg font-semibold">Call To Us</h3>
            </div>
            <p className="text-base mb-3">We are available 24/7, 7 days a week.</p>
            <p className="text-base mb-8">Phone: +8801611112222</p>

            {/* Divider */}
            <div className="border-t border-gray-300 mb-8"></div>

            {/* Write To US */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 bg-[#DB4444] rounded-full flex justify-center items-center text-white shrink-0">
                <FaEnvelope size={18} />
              </div>
              <h3 className="text-lg font-semibold">Write To US</h3>
            </div>
            <p className="text-base mb-3">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-base">Emails: customer@exclusive.com</p>
            <p className="text-base">Emails: support@exclusive.com</p>

          </div>

          {/* Right Card: Contact Form */}
          <div className="w-2/3 p-10 bg-white rounded-sm border border-gray-200 shadow-sm">
            <form onSubmit={handleSubmit}>
              
              {/* Row 1: Name, Email, Phone */}
              <div className="flex gap-8 mb-8">
                <div className="w-1/3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#F5F5F5] py-4 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400 placeholder-gray-500"
                  />
                </div>
                <div className="w-1/3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F5F5F5] py-4 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400 placeholder-gray-500"
                  />
                </div>
                <div className="w-1/3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#F5F5F5] py-4 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Row 2: Message Textarea */}
              <div className="mb-8">
                <textarea
                  name="message"
                  placeholder="Your Massage"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] py-4 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400 placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              {/* Row 3: Send Message Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white text-base font-medium py-4 px-12 rounded-sm cursor-pointer hover:bg-red-700 transition-colors"
                >
                  Send Massage
                </button>
              </div>

            </form>
          </div>

        </div>
      </Container>

      {/* Toast Container */}
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

export default Contact;
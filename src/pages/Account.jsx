import React, { useState } from 'react';
import Container from '../components/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrump from '../components/BreadCrump';

const Account = () => {
  // State to track active sidebar item
  const [activeTab, setActiveTab] = useState('My Profile');

  // Form state
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    toast.success("Profile updated successfully!");
    // In a real app, you would send formData to your backend here
  };

  return (
    <div className='pt-20 pb-40'>
      <Container>
        
       <BreadCrump/>

        <div className="flex gap-20">
          {/* Sidebar Navigation */}
          <div className="w-1/4">
            <h3 className="text-xl font-semibold mb-4">Manage My Account</h3>
            <ul className="space-y-3 ml-4 mb-8 text-sm">
              <li>
                <button 
                  onClick={() => setActiveTab('My Profile')}
                  className={`cursor-pointer hover:text-black transition-colors ${activeTab === 'My Profile' ? 'text-[#DB4444] font-medium' : 'text-gray-500'}`}
                >
                  My Profile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('Address Book')}
                  className={`cursor-pointer hover:text-black transition-colors ${activeTab === 'Address Book' ? 'text-[#DB4444] font-medium' : 'text-gray-500'}`}
                >
                  Address Book
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('My Payment Options')}
                  className={`cursor-pointer hover:text-black transition-colors ${activeTab === 'My Payment Options' ? 'text-[#DB4444] font-medium' : 'text-gray-500'}`}
                >
                  My Payment Options
                </button>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">My Orders</h3>
            <ul className="space-y-3 ml-4 mb-8 text-sm">
              <li>
                <button 
                  onClick={() => setActiveTab('My Returns')}
                  className={`cursor-pointer hover:text-black transition-colors ${activeTab === 'My Returns' ? 'text-[#DB4444] font-medium' : 'text-gray-500'}`}
                >
                  My Returns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('My Cancellations')}
                  className={`cursor-pointer hover:text-black transition-colors ${activeTab === 'My Cancellations' ? 'text-[#DB4444] font-medium' : 'text-gray-500'}`}
                >
                  My Cancellations
                </button>
              </li>
            </ul>

            <h3 className="text-xl font-semibold">My WishList</h3>
          </div>

          {/* Main Content Area */}
          <div className="w-3/4">
            <div className="border border-gray-200 rounded-md p-8 bg-white">
              
              {/* Form Header */}
              <h2 className="text-xl font-medium text-[#DB4444] mb-6">Edit Your Profile</h2>

              <form onSubmit={handleSaveChanges}>
                
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-10 mb-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                </div>

                {/* Email & Address */}
                <div className="grid grid-cols-2 gap-10 mb-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                </div>

                {/* Password Changes */}
                <div className="mb-8">
                  <h3 className="text-base font-medium mb-4">Password Changes</h3>
                  <div className="space-y-4">
                    <input
                      type="password"
                      name="currentPassword"
                      placeholder="Current Password"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
                    />
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm New Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full bg-[#F5F5F5] py-3 px-4 outline-none rounded-sm focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end items-center gap-8">
                  <button
                    type="button"
                    onClick={() => setFormData({
                      ...formData, 
                      currentPassword: '', 
                      newPassword: '', 
                      confirmPassword: ''
                    })}
                    className="text-base font-medium cursor-pointer hover:text-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#DB4444] text-white text-sm font-medium py-3 px-12 rounded-sm cursor-pointer hover:bg-red-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

      </Container>

      {/* Toast Container for messages */}
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

export default Account;
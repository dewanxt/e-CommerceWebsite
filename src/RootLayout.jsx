import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const RootLayout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout

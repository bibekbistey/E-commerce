import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './src/Components/Navbar'
import Footer from './src/Components/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
  )
}

export default Layout
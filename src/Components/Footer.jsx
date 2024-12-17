import React from 'react'
import logo from "../assets/logo1.png";
import { NavLink } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";




const Footer = () => {
  const menu=[{
    name:"Home",
    path:""
},
{
    name:"Shop",
    path:"/shop"
},
{
    name:"About",
    path:"/about"
},
{
    name:"Contact",
    path:"/contact"
}
]
  return (
    <div className='max-w-full bg-slate-800 h-full px-10 py-16 space-y-5'>
       <div className='flex items-center justify-center'>
              <img className='h-20' src={logo} alt='Company Logo'></img>

          </div>
      <div className='flex items-center justify-center space-x-4 text-white font-mono '>
        {menu.map((list,i)=>
            <div><NavLink className={({isActive})=>isActive?"text-red-500":""} to={list.path}>{list.name} </NavLink></div>
        )}
       




      </div>
      {/* <p className=''>&copy; 2024 E-Commerce Store. All rights reserved.</p> */}
       
          <div className=' flex items-center justify-center gap-3 mx-auto'>
         <FaInstagramSquare className='text-orange-600' size={30} />
        <FaLinkedin className='text-blue-500' size={30} />
        <FaSquareWhatsapp className='text-green-600' size={30} /></div>
        
      
      
      

      
    </div>
    
    
  )
}

export default Footer
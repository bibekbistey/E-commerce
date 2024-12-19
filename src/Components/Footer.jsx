import React from 'react'
import logo from "../assets/logo1.png";
import { NavLink } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import {motion} from "framer-motion";




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
    name:"Blog",
    path:"/blog"
},
{
    name:"Contact",
    path:"/contact"
}
]
  return (
    <div className='max-w-full bg-slate-800 h-full px-10 py-16 space-y-5'>
       <motion.div
       initial={{opacity:0,y:-50}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5,delay:0.4}}
        className='flex items-center justify-center'>
              <img className='h-20' src={logo} alt='Company Logo'></img>

          </motion.div>
      <div className='flex items-center justify-center space-x-4 text-white font-mono '>
        {menu.map((list,i)=>
            <motion.div
            initial={{opacity:0,y:-50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.2*i}}
            ><NavLink className={({isActive})=>isActive?"text-red-500":""} to={list.path}>{list.name} </NavLink></motion.div>
        )}
       




      </div>
      {/* <p className=''>&copy; 2024 E-Commerce Store. All rights reserved.</p> */}
       
     <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:0.5,delay:0.7}} className=' flex items-center justify-center gap-3 mx-auto'>
         <FaInstagramSquare className='text-orange-600' size={30} />
        <FaLinkedin className='text-blue-500' size={30} />
        <FaSquareWhatsapp className='text-green-600' size={30} /></motion.div>
        
      
      
      

      
    </div>
    
    
  )
}

export default Footer
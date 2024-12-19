import React, { useContext, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo1.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import LoginContext from '../Context/LoginContext';
import CartContext from '../Context/CartContext';
import { FaOpencart } from "react-icons/fa6";
import { RiMenuFoldFill } from "react-icons/ri";
 



const Navbar = () => {

  const {openlogin,setlogin}=useContext(LoginContext);
  const {cartitemscount}=useContext(CartContext);

    const navigate=useNavigate();

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
    },
    
]

    const [toggle,settoggle]=useState(false);
    const handleToggle=()=>{
        settoggle(!toggle);
    }

  return (
    <div className='w-full h-[10vh] bg-green-200 flex justify-between sticky top-0 z-10 shadow-md rounded-sm'>
        {/* -------Image------- */}
        <div className='h-full w-28 flex items-center cursor-pointer'>
            <img src={logo} onClick={()=>navigate("")} alt='Company Logo'></img>

        </div>
        {/* -------------Menu------------------ */}
        <div className='hidden md:flex items-center gap-8 mr-5'>
            {menu.map((list,index)=>
            <div>
                
                <NavLink to={list.path} className={({isActive})=>isActive?"text-blue-600":"" }><h2 className='text-lg font-nav font-semibold hover:scale-105'>{list.name}</h2></NavLink>
                
            </div>
            
            )}
            <FaOpencart size={25}  className='text-gray-600 cursor-pointer' onClick={()=>{navigate("/cart")}} /> 
             {cartitemscount()>0 && (
              <span className="absolute top-3 right-24 bg-red-600 text-white rounded-full text-sm w-4 h-4 flex items-center justify-center">
              {cartitemscount()}
            </span>
             )}
            <div className='font-nav text-white'>
                    <button onClick={()=>{setlogin(true);
                      console.log("Login button clicked, openlogin:", openlogin);
                    }} className='px-2 py-1 bg-red-500 rounded-lg'>Login</button>
            </div>
            
        </div>

        {/* -------------Small Screen------------- */}
        <div className='flex md:hidden items-center mr-5 gap-5 z-50 '>
        
             <FaOpencart size={25}  className='text-blak cursor-pointer text-gray-600' onClick={()=>{navigate("/cart")}} /> 
             {cartitemscount()>0 && (
              <span className="absolute top-3 right-12 bg-red-600 text-white rounded-full text-sm w-4 h-4 flex items-center justify-center">
              {cartitemscount()}
            </span>
             )}
    
            {!toggle?<RiMenuFoldFill onClick={handleToggle} size={25} className='text-gray-600' /> :<IoMdClose onClick={handleToggle} className='text-gray-600' size={25} />}
            
        </div>
        <div className= {toggle?'fixed md:hidden items-center space-y-8 mr-5 z-50 top-0 w-1/2 h-full bg-[#1c1c1e] text-white rounded-md':"fixed left-[-100%]"}>
        <div className='w-28 flex items-center mx-auto cursor-pointer'>
            <img src={logo} onClick={()=>{navigate("");settoggle(false)}} alt='Company Logo'></img>

        </div>

            {menu.map((list,index)=>
            <div className='mt-10 text-center'>
                
                <NavLink to={list.path}  className={({isActive})=>isActive?"text-red-600":""} onClick={()=>settoggle(false)} ><h2 className='text-lg font-nav font-semibold hover:scale-105'>{list.name }</h2></NavLink>
                
            </div>
            
            )}
            <div className='font-nav flex justify-center'>
                    <button onClick={()=>setlogin(true)} className='px-2 py-1 bg-blue-500 rounded-lg'>Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar





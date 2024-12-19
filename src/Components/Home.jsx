import React, { useState } from 'react'
import Homepage from '../Data/Homepage'
import tshirt from "../assets/t-shirt.avif"
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"

const Home = () => {

    const [img,setimg]=useState(Homepage[0].image)
    const [toggle,settoggle]=useState()
    const navigate=useNavigate();


  return (
    <div className='max-w-[1200px] h-full p-10 md:h-[90vh] mx-auto md:flex md:justify-between'>

            {/* ----------------------for image----------------------- */}
           
            <motion.div 
            initial={{ opacity:0,x:-100 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration: 1,delay:0.4 }}
             className='w-full h-[60vh] relative '>
                <img className=' h-full mx-auto pt-10 object-cover' src={img}></img>
                <div
                
                 className='md:flex justify-center absolute items-center md:gap-3 space-y-4 md:space-y-0 -bottom-[10px] md:-bottom-[110px] right-0 left-8 mt-8'>
                    {Homepage.map((img,i) =>
                    <motion.div
                    initial={{ opacity:0,x:-10 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration: 0.5,delay:0.5*i }}
                     className='w-24 h-28  shadow-lg '>
                        <img className='h-full mx-auto' src={img.image} onClick={()=>{setimg(img.image)}}></img></motion.div>)}
                </div>
            </motion.div>
        
            <div className='flex items-center mx-24 font-serif w-full h-1/2 md:h-full mt-10 '>
                <motion.div
                initial={{ opacity:0,x:100 }}
                animate={{ opacity:1,x:0 }}
                transition={{ duration: 1,delay:0.4 }}
                 className='mt-5 space-y-4'> 
                    <h1 className='text-5xl md:text-[42px] lg:text-[62px] max-w-3xl'>Get the best products at affordable price</h1>
                    <h2 className=' text-xl text-gray-400'>Stop visiting physical stores</h2>
                    <h3 className=' font-thin text-gray-400'>Get upto 60% discounts</h3>
                    <button onClick={()=>navigate("/shop")} className='mx-10 text-lg px-2 py-1 bg-red-600 rounded-lg text-white font-mono font-bold'>Shop Now</button></motion.div>
               
            </div>
        
        
  
    </div>
  )
}

export default Home
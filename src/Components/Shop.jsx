import React, { useContext, useRef, useState } from 'react'
import Products from "../Data/Shop"
import Product from './Product';
import ProductContext from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import {motion} from "framer-motion";

const Shop = () => {
  const productsperpage=4;
  const [currentpage,setcurrentpage]=useState(0);
  const navigate=useNavigate();

  const handlepagechange=(pagenumber)=>{
    setcurrentpage(pagenumber);
  }
  const shopping=useContext(ProductContext)

  const numberofpage=Math.ceil(Products.length/productsperpage)
  const pageIndex=Array.from({length:numberofpage},(_,index)=>index+1);
  const rows=Products.slice(currentpage*productsperpage,(currentpage+1)*productsperpage)

  const handleproductclick=(item)=>{
    shopping.handledetails(item);
    navigate("/product")
  }
   
  
  return (
    <div className='max-w-[1300px] min-h-screen h-full mx-auto p-10'>
      <h1 className='flex justify-center font-nav font-bold text-2xl mb-10'>All products</h1>
      <div className='grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 p-3 '>
        {rows.map((item,index)=>
        <motion.div 
        initial={{ opacity:0,x:-100 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration: 0.5,delay:0.4*index }}
        className='w-[230px] rounded-xl shadow-md border-2 h-[320px] hover:scale-105 cursor-pointer p-3 ' onClick={()=>handleproductclick(item)}>
          <div className='w-[200px] h-[250px] bg-slate-200 rounded-md mx-auto' >
            <img className='w-[90%] h-[80%] pt-2 object-cover mx-auto' src={item.img}></img></div>
          
          <div className='mx-1 font-mono mt-2'>
          <h1 className=''>{item.name}</h1>
          <p className='text-gray-400'>NPR.{item.price}</p>
          
          </div>
         
        </motion.div>
        )}
      </div>
      <div className='flex justify-center gap-2 mt-10'>
        <button className='px-1 py-0 bg-green-500 rounded-sm font-bold' onClick={()=>handlepagechange(currentpage-1)}>&lt;</button>
        {pageIndex.slice(Math.max(0,currentpage-2),Math.min(numberofpage,currentpage+2)
                ).map((page)=>
                    <button className='px-2 py-0 bg-gray-500 rounded-sm text-white font-bold' key={page} onClick={()=>{handlepagechange(page-1)}}>{page}</button>
                )
                }
        <button className='px-1 py-0 font-bold bg-green-500 rounded-sm' onClick={()=>handlepagechange(currentpage+1)}>&gt;</button>
      </div>

    </div>
  )
}

export default Shop
import React, { useContext} from 'react'
import ProductContext from '../Context/ProductContext'
import CartContext from '../Context/CartContext'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {motion} from "framer-motion"

const Product = () => {
  const prod= useContext(ProductContext)
  const {addtocart}=useContext(CartContext)
  const navigate=useNavigate();
  
  return (
    <div className="max-w-[1200px] min-h-screen mx-auto mt-5 p-5 md:flex">
      
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5,delay:0.4}} >
        
      <IoIosArrowBack className='cursor-pointer text-gray-400' onClick={()=>{navigate(-1)}} size={25} />
      </motion.div>
      <motion.div
      initial={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.5,delay:0.2}}
       className='w-full md:w-1/2 flex justify-center md:items-center'>
        <img
        src={prod.details.img}
        alt={prod.details.name}
        className="w-[60%] bg-gray-300 h-auto object-cover p-2 my-5 rounded-sm shadow-stone-600 "
      />

      </motion.div>
      <motion.div
      initial={{opacity:0,x:100}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.5,delay:0.2}}
       className='flex justify-center items-center'>
      <div className='font-mono '>
      <h1 className="text-2xl font-bold text-blue-400">{prod.details.name}</h1>
    
      <p className="text-md">Price: NPR.{prod.details.price}</p>
      <p className="text-md text-gray-600 mt-2">{prod.details.description}</p>
      <button onClick={()=>{addtocart(prod.details);
        toast.success("Items Added Successfully")
      }}  className='px-2 py-1 bg-blue-500 rounded-md mt-2 text-white font-bold'>Add to Cart</button>
      </div>
      </motion.div>
      <ToastContainer></ToastContainer>
     
   
    
  </div>
  )
}

export default Product





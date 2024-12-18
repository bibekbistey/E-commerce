import React, { useContext} from 'react'
import ProductContext from '../Context/ProductContext'
import CartContext from '../Context/CartContext'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Product = () => {
  const prod= useContext(ProductContext)
  const {addtocart}=useContext(CartContext)
  const navigate=useNavigate();
  
  return (
    <div className="max-w-[1200px] mx-auto mt-5 p-5 md:flex">
      <IoIosArrowBack className='cursor-pointer' onClick={()=>{navigate(-1)}} size={25} />
      <div className='w-full md:w-1/2 h-1/2 flex justify-center'>
        <img
        src={prod.details.img}
        alt={prod.details.name}
        className="w-[60%] h-auto object-cover p-2 my-5 rounded-sm shadow-sm shadow-stone-600"
      />

      </div>
      <div className='flex justify-center items-center'>
      <div className='font-mono '>
      <h1 className="text-2xl font-bold text-blue-400">{prod.details.name}</h1>
    
      <p className="text-md">Price: NPR.{prod.details.price}</p>
      <p className="text-md text-gray-600 mt-2">{prod.details.description}</p>
      <button onClick={()=>{addtocart(prod.details);
        toast.success("Items Added Successfully")
      }}  className='px-2 py-1 bg-slate-500 rounded-md mt-2 text-white font-bold'>Add to Cart</button>
      </div>
      </div>
      <ToastContainer></ToastContainer>
     
   
    
  </div>
  )
}

export default Product





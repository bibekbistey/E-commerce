import React from 'react';
import { FaMapLocation } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoMdTimer } from "react-icons/io";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {motion} from "framer-motion";

const Contact = () => {
  const position = [27.698333, 85.340510]; // Coordinates for Mid-Baneshwor, Kathmandu

  return (
    <div className="min-h-screen mx-auto max-w-[1200px]">
      <motion.p
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5,delay:0.4}}
       className="text-center mt-2 text-3xl font-nav font-semibold">Get In Touch</motion.p>
      <div className='md:flex md:space-x-10 mt-10'>
      <motion.div
      initial={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.5,delay:0.4}}
       className="w-full px-8 py-4 mt-12 md:w-1/2">
        <h2 className="font-nav font-bold text-2xl mb-8">Visit Our Local Store</h2>
        <div className="mt-2 text-gray-600 space-y-3">
          <p className="flex items-center">
            <FaMapLocation size={20} />
            <span className="text-gray-400 mx-5 font-mono">Mid-Baneshwor, Kathmandu</span>
          </p>
          <p className="flex items-center">
            <IoCall size={20} />
            <span className="text-gray-400 mx-5 font-mono">01-417700</span>
          </p>
          <p className="flex items-center">
            <IoIosMail size={20} />
            <span className="text-gray-400 mx-5 font-mono">bistabibek9@gmail.com</span>
          </p>
          <p className="flex items-center">
            <IoMdTimer size={20} />
            <span className="text-gray-400 mx-5 font-mono">9:00 AM - 6:00 PM</span>
          </p>
        </div>
      </motion.div>

      {/* -----------------------Map Section------------------------- */}
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1,delay:0.9}}
      className="w-full px-10 py-4 z-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.6135142328044!2d85.33793507492271!3d27.698337725889775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQxJzU0LjAiTiA4NcKwMjAnMjUuOCJF!5e0!3m2!1sen!2snp!4v1737027675108!5m2!1sen!2snp" width="600" height="450" style={{ border: '0' }}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </motion.div>
      </div>
    </div>
  );
};

export default Contact;

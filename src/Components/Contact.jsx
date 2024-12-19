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
        <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Mid-Baneshwor, Kathmandu <br /> Visit us here!
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>
      </div>
    </div>
  );
};

export default Contact;

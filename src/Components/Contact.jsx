// import React from 'react'
// import { FaMapLocation } from "react-icons/fa6";
// import { IoCall } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";
// import { IoMdTimer } from "react-icons/io";





// const Contact = () => {
//   return (
//     <div className='min-h-screen'>
//       <p className='text-center mt-2 text-xl font-nav font-semibold'>Get In Touch</p>
//       <div className='w-full px-8 py-4'>
//         <h2 className='font-nav font-bold'>Visit Our Local Store</h2>
//         <div className='mt-2 text-gray-600 space-y-3'>
//           <p className='flex items-center'><FaMapLocation size={20} /><span className='text-black mx-5 font-mono'>Mid-Baneshwor, Kathmandu</span></p>
//           <p className='flex items-center'><IoCall size={20} /><span className='text-black mx-5 font-mono'>01-417700</span></p>
//           <p className='flex items-center'><IoIosMail size={20} /><span className='text-black mx-5 font-mono'>bistabibek9@gmail.com</span></p>
//           <p className='flex items-center'><IoMdTimer size={20} /><span className='text-black mx-5 font-mono'>9:00 AM - 6:00 PM</span></p>
//         </div>
//       </div>
//       {/* -----------------------Map Section------------------------- */}


//     </div>
//   )
// }

// export default Contact




import React from 'react';
import { FaMapLocation } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoMdTimer } from "react-icons/io";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const position = [27.698333, 85.340510]; // Coordinates for Mid-Baneshwor, Kathmandu

  return (
    <div className="min-h-screen mx-auto max-w-[1200px]">
      <p className="text-center mt-2 text-3xl font-nav font-semibold">Get In Touch</p>
      <div className='md:flex md:space-x-10 mt-10'>
      <div className="w-full px-8 py-4 mt-12 md:w-1/2">
        <h2 className="font-nav font-bold">Visit Our Local Store</h2>
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
      </div>

      {/* -----------------------Map Section------------------------- */}
      <div className="w-full px-10 py-4 z-0">
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
      </div>
      </div>
    </div>
  );
};

export default Contact;

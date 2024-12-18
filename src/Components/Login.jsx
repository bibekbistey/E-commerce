// import React from 'react'

// const Login = ({isOpen,onClose}) => {
//     if(!isOpen)
//         return null;
    
//   return (
//     <div className="w-full h-screen flex justify-center items-center p-5 font-serif">
     
//       <div className="max-w-[500px] w-full border h-[70vh] flex flex-col items-center justify-center space-y-5 shadow-md rounded-md">
//         <p className="text-center text-4xl font-semibold">Login</p>
        
//         <div className="w-[70%] space-y-3">
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600"
//           />
//           <button className="w-full p-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
//             Login
//           </button>
//           <p className='flex flex-row justify-end'>Create an Account?<a className='text-blue-600 mx-2' href='/signup'>signup</a></p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login



import React, { useContext } from "react";
import LoginContext from "../Context/LoginContext";
import SignupContext from "../Context/SignupContext";

const Login = () => {

  

  const {openlogin,setlogin}= useContext(LoginContext);
  const{opensignup,setsignup}=useContext(SignupContext)
  console.log("Login component rendered, openlogin:", openlogin);
  // if (openlogin===true){
  //   setsignup(false);
  // }
  // if (openlogin===false){
  //   setsignup(true);
  // }

  if (!openlogin) return null;
  
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-30 bg-black bg-opacity-50 backdrop-blur-sm p-4 md:p-0">
      {/* Login Box */}
      <div className="max-w-[500px] w-full border h-[70vh] flex flex-col items-center justify-center space-y-5 shadow-md rounded-md bg-white">
        <p className="text-center text-4xl font-semibold">Login</p>
        <div className="w-[70%] space-y-3">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600"
          />
          <button className="w-full p-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Login
          </button>
          <p className="flex flex-row justify-end">
            Create an Account?
            <button className="mx-2 text-blue-700 text-[18px]" onClick={()=>{
              setlogin(false);
              setsignup(true)}}>Signup</button>
          </p>
          {/* Close Button */}
          <button
            onClick={()=>{setlogin(false)}}
            className="w-full p-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

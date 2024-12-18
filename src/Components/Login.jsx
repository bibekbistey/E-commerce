import React, { useContext } from "react";
import LoginContext from "../Context/LoginContext";
import SignupContext from "../Context/SignupContext";
import { IoCloseCircle } from "react-icons/io5";


const Login = () => {

  

  const {openlogin,setlogin}= useContext(LoginContext);
  const{opensignup,setsignup}=useContext(SignupContext)
  console.log("Login component rendered, openlogin:", openlogin);
  

  if (!openlogin) return null;
  
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-30 bg-black bg-opacity-50 backdrop-blur-sm p-4 md:p-0">

      {/* Login Box */}
      <div className="relative max-w-[500px] w-full border h-[70vh] flex flex-col items-center justify-center space-y-5 shadow-md rounded-md bg-white">
        <IoCloseCircle onClick={()=>{setlogin(false)}} size={25} className="absolute top-4 right-4 cursor-pointer text-red-500" />
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
          <button className="w-1/2 mx-20 p-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Login
          </button>
          <p className="flex flex-row justify-end">
            Create an Account?
            <button className="mx-2 text-blue-700 text-[18px]" onClick={()=>{
              setlogin(false);
              setsignup(true)}}>Signup</button>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext } from 'react'
import SignupContext from '../Context/SignupContext'
import LoginContext from '../Context/LoginContext';

const Signup = () => {

  const {openlogin,setlogin}= useContext(LoginContext);
  const{opensignup,setsignup}=useContext(SignupContext)

  if(!opensignup) return null;
  return (
    <div className='fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 md:p-0 z-30'>
    <div className="w-full h-screen flex justify-center items-center p-5 font-serif ">
     
      <div className="max-w-[500px] w-full border-2 h-[70vh] flex flex-col items-center justify-center space-y-5 shadow-md rounded-md bg-white">
        <p className="text-center text-3xl font-semibold">Signup</p>
        
        <div className="w-[70%] space-y-3 flex-col justify-center">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-600"
          />
          <button className="w-1/2 mx-20 p-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Signup
          </button>
          <p className='flex flex-row justify-end'>Already have an account?<button className='mx-2 text-blue-700' onClick={()=>
            {setsignup(false);
            setlogin(true)}}>login</button></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup

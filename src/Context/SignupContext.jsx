import React, { useState } from 'react'

const SignupContext =React.createContext();

export const SignupContextProvider=({children})=>{
    const[opensignup,setsignup]=useState(false);

    return(
        <SignupContext.Provider value={{opensignup,setsignup}}>
            {children}
        </SignupContext.Provider>
    )
}
export default SignupContext
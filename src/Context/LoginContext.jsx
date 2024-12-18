import React, { useState } from 'react'

const LoginContext = React.createContext();

export const LoginContextProvider=({children})=>{
    const [openlogin,setlogin]=useState(false);

    return(
        <LoginContext.Provider value={{openlogin,setlogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext
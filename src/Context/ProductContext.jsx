import React, { useState } from 'react'
import Products from '../Data/Shop';

const ProductContext = React.createContext();

export const ProductContextProvider=({children})=>{

    const [details,setdetails]=useState([" "]);
    const handledetails=(item)=>{
        setdetails(item)
    }


    return(
        <ProductContext.Provider value={{details,handledetails}}>
            {children}
        </ProductContext.Provider>
    )

}


export default ProductContext
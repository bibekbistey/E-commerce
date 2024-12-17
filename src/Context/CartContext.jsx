import React, { useState } from 'react'

const CartContext = React.createContext();

export const CartCotextProvider=({children})=>{

    const [cart,setCart]=useState([])

    const addtocart=(newcart)=>{
        setCart([...cart,newcart])

    }

    return(
        <CartContext.Provider value={{cart,addtocart}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
import React, { useState } from 'react'
import Cart from '../Components/Cart';

const CartContext = React.createContext();

export const CartContextProvider=({children})=>{

    const [cart,setCart]=useState([])

    const addtocart=(newcart)=>{
        setCart([...cart,newcart])

    }

    const cartitemscount=()=>{
        return cart.length;
    }

    return(
        <CartContext.Provider value={{cart,setCart,addtocart,cartitemscount}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
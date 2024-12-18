import React, { useState } from 'react'
import Cart from '../Components/Cart';

const CartContext = React.createContext();

export const CartCotextProvider=({children})=>{

    const [cart,setCart]=useState([])

    const addtocart=(newcart)=>{
        setCart([...cart,newcart])

    }

    const cartitemscount=()=>{
        return cart.length
    }

    return(
        <CartContext.Provider value={{cart,addtocart,cartitemscount}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
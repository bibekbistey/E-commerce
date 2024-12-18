
import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { AiFillDelete } from "react-icons/ai";


const Cart = () => {
    const item = useContext(CartContext);
    const total = item.cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="max-w-[1200px] min-h-screen flex flex-col h-full p-5 mx-auto">
            <h1 className="relative text-center text-2xl font-serif">Cart</h1>
            <AiFillDelete onClick={()=>item.setCart([])} className='absolute right-10 text-red-600 cursor-pointer' size={20} />
            <div className="w-full mt-5 space-y-5">
                {item.cart.map((carti, index) => (
                    <div key={index} className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 border">Image</th>
                                    <th className="p-2 border">Name</th>
                                    <th className="p-2 border">Price</th>
                                    <th className="p-2 border">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border">
                                    <td className="p-2 text-center border-r">
                                        <img className="w-[50px] h-[50px] object-cover mx-auto" src={carti.img} alt={carti.name} />
                                    </td>
                                    <td className="p-2 text-center border-r">
                                        <h1 className="font-mono text-md text-red-600">{carti.name}</h1>
                                    </td>
                                    <td className="p-2 text-center border-r">
                                        <p className="font-mono text-md">NPR. {carti.price}</p>
                                    </td>
                                    <td className="p-2 text-center">
                                        <p className="font-mono text-md">1</p> {/* You can add a quantity input here */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
                <div className="text-center mt-5 font-mono">
                    <span className="font-extrabold text-gray-500">Total:</span> NPR. {total}
                </div>
                

            </div>
        </div>
    );
};

export default Cart;

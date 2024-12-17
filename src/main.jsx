import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, createBrowserRouter, createRoutesFromElements, Router, Outlet, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './Components/Home.jsx'
import Shop from './Components/Shop.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Product from './Components/Product.jsx'
import { ProductContextProvider } from './Context/ProductContext.jsx'
import { CartCotextProvider } from './Context/CartContext.jsx'
import Cart from './Components/Cart.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='product' element={<Product></Product>}></Route>
      <Route path='shop' element={<Shop></Shop>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='cart' element={<Cart></Cart>}></Route>

    </Route>

  )
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <CartCotextProvider>
    <ProductContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </ProductContextProvider>
    </CartCotextProvider>
  </StrictMode>,
)

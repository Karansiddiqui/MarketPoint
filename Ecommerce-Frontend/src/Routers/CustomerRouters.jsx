import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../customer/pages/HomePagw/HomePage'
import { Cart } from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'

import { Footer } from '../customer/components/Footer/Footer'

import Checkout from '../customer/components/Checkout/Checkout.jsx'
import { Order } from '../customer/components/Order/Order.jsx'
import Product from '../customer/components/Product/Product.jsx'
import ProductDetails from '../customer/components/ProductDetails/ProductDetail.jsx'
import {OrderDetail } from '../customer/components/Order/OrderDetail.jsx'

export const CustomerRouters = () => {
  return (
    <div>

        <div>
            <Navigation className="z-50"/>
        </div>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
          

          {/* <OrderDetail/> */}
            </Routes>
        <div>
        <Footer /> 
        </div>
    </div>
  )
}

import { useState } from 'react';
import DashBoard from './components/DashBoard';
import Product from './components/Product';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      
      <BrowserRouter>
      <DashBoard />
        <Routes>
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

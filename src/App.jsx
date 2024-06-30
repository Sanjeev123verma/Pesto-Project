import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Aboutus from './Pages/Aboutus';
import Products from './Pages/Products';
import Contactus from './Pages/Contactus';
import Footer from './Pages/Footer';

function App() {
  return (

      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/About us' element={<Aboutus/>} />
          <Route path='/Contact us' element={<Contactus/>} />
          <Route path='/Cart' element={ <Cart/>} />
          <Route path='/Signup' element={ <Signup/>} />
        </Routes>
        <Footer/>
      </div>

    
  )
}


export default App;

import React from 'react'

import Home from './Components/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './Components/Pages/About'
import Services from './Components/Pages/Services'
import { Toaster } from 'react-hot-toast';
import Portfolio from './Components/Pages/Portfolio'
import Testimonials from './Components/Pages/Testimonials'
import Contact from './Components/Pages/Contact'

import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import ServDetails from './Components/Pages/ServDetails'
const App = () => {
  return (

    <BrowserRouter>
    <Toaster position='top-center' />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/test' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/serviceDetail/:id' element={<ServDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  )
}

export default App

import React from 'react'
import Header from './Components/Layout/Header'
import Home from './Components/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home'
import Design from './Design'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

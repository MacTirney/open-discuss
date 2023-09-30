// import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Discuss from './pages/Discuss.jsx'
import Communities from './pages/Communities.jsx'
import Resources from './pages/Resources.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
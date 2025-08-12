import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import Contact from '../src/pages/Contact/Contact.js'
import About from '../src/pages/About/About.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

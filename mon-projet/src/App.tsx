import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import Contact from '../src/pages/Contact/Contact.js'
import About from '../src/pages/About/About.js'
import './App.css'

function App() {


  return (
    <>
      <main>
      <NavBar />
      <About />
      <Footer />

      </main>
    </>
  )
}

export default App

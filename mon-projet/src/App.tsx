import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import Contact from '../src/pages/Contact/Contact.js'
import './App.css'

function App() {


  return (
    <>
      <main>
      <NavBar />
      <Contact />
      <Footer />

      </main>
    </>
  )
}

export default App

import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <div><NavBar /></div>
      <div><Footer /></div>

      </main>
    </>
  )
}

export default App

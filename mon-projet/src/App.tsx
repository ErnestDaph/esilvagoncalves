import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import Contact from '../src/pages/Contact/Contact.js'
import About from '../src/pages/About/About.js'
import Experiences from '../src/pages/Experiences/experiences.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className='page'>
      <main className='main'>
      <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Footer from './component/Footer'
import About from './pages/Aboutpage'
import Contact from './pages/Contactpage'
import Project from './pages/Project'
import Skills from './pages/Skills'

const App = () => {
  return (
    <main>
   
  <Navbar/>
  <Homepage/>
 <About/>
 <Skills/>
 <Project/>
 <Contact/>
  <Footer/>
  </main>
  )
}

export default App
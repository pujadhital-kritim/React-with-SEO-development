import React from 'react'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Footer from './component/Footer'
import About from './pages/Aboutpage'

const App = () => {
  return (
    <main>
   
  <Navbar/>
  <Homepage/>
 <About/>
  <Footer/>
  </main>
  )
}

export default App
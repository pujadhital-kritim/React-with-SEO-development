import React from 'react'

import AccessibleForm from './component/AccessibleForm'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'

const App = () => {
  return (
   <>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
   </>
  )
}

export default App
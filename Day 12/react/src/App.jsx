
import {Routes,Route} from 'react-router-dom'
import Profile from './component/Profile'
import Home from './pages/Home'

const App = () => {
  return (
   <>
 
  <Routes>
   <Route path="/profile/:username" element={<Profile/>}/>
   <Route path='/' element={<Home/>}/>
  </Routes>
   </>
  )
}

export default App
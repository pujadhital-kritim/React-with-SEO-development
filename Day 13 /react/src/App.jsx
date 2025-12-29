
import {Routes,Route} from 'react-router-dom'
import Post from './component/Post'


const App = () => {
  return (
   <>
 
  <Routes>
 
   <Route path='/' element={<Post/>}/>
  </Routes>
   </>
  )
}

export default App

import {Routes,Route} from "react-router-dom";
import Users from './component/Users';


const App = () => {
  return (
   <>
 <Routes>
<Route path="/" element={<Users/>}/>
 </Routes>
 
   </>
  )
}

export default App
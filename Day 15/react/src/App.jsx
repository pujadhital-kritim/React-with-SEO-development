
import {Routes,Route} from "react-router-dom";
import AddUser from "./component/AddUser";


const App = () => {
  return (
   <>
 <Routes>
<Route path="/" element={<AddUser/>}/>
 </Routes>
 
   </>
  )
}

export default App
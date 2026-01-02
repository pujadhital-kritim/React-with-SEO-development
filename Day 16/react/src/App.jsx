
import {Routes,Route} from "react-router-dom";
import AddUser from "./component/AddUser";
import User from "./component/User";
import { useState } from "react";


const App = () => {

  const[refreshTrigger,setRefreshTrigger]=useState(0);


  const handleUserAdded=()=>{
    setRefreshTrigger((prev) => prev+1);

  };


   
  return (
   <>
 <AddUser onUserAdded={handleUserAdded} />
  <User refreshTrigger={refreshTrigger} />
 
   </>
  )
}

export default App
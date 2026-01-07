import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = ({setIsLoggedIn}) => {
const navigate= useNavigate();

    const handleLogout =()=>{
        setIsLoggedIn(false);
        navigate("/")
    };
  return (
 <main>
    <h2>Dashboard</h2>
    <button onClick={handleLogout}>Logout</button>
 </main>
  )
}

export default Dashboard
import React from 'react'
import {useNavigate} from "react-router-dom"
const Login = ({setIsLoggedIn}) => {

const navigate = useNavigate();


    const handleLogin=()=>{
        setIsLoggedIn(true); // user logged in
        navigate("/dashboard")
    }
  return (
  <main>
    <h2>Login</h2>
    <button onClick={handleLogin}>Login</button>
  </main>
  )
}

export default Login
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
  

    const goToProfile=()=>{
        navigate("/profile/puja");

    }

  return (
    <main>
        <h1>Home page</h1>
        <button onClick={goToProfile}>Profile</button>
    </main>
  )
}

export default Home
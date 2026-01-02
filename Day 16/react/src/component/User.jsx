
// DIsplay list of user


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getUser } from '../api/userApi';


const User = ({refreshTrigger}) => {

const[users,setUsers]= useState([]);
const[loading,setLoading]= useState(true);
const[error,setError]=useState(null);


useEffect(()=>{
   const fetchUser = async()=>{
    try{
        setLoading(true);
        const data = await getUser();
        setUsers(data);
        console.log(data);
    }catch(error){
        setError(error.message);
    }finally{
        setLoading(false);
    }
   }
   fetchUser();
},[refreshTrigger]);  // refetch data when refresh trigger change

    
  return (

   <main>

    {loading && <p>User Loading...</p>}
    {error && <p>{error}</p>}

   {users.map((user)=>(
    <p key={user.id}>{user.name}</p>
   ))}
   </main>
  )
}

export default User
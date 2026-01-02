//Form to add user

import React from 'react'
import { useState } from 'react'
import {createUser} from '../api/userApi'

const AddUser = ({onUserAdded}) => {
    const[name,setName]= useState("");
    const[email,setEmail]= useState("");
    const[errors,setErrors]=useState(null);
    const[loading,setLoading]= useState(false);
    const[success,setSuccess]=useState(false);


const handleClick= async (e)=> {

   e.preventDefault();

   setLoading(true);
   setSuccess(false);
   setErrors(null);

   try{
  const userData= {name,email};
   const res= await createUser(userData);
console.log(res);
  setSuccess(true);
  setName("");
  setEmail("");
  onUserAdded(); // notify parent to refresh Users
   }catch(error){
    setErrors(error.message);
   }
   finally{
    setLoading(false)
   }
    }


  return (
  <main>
    <h1>Form to add user</h1>


    {loading && <p>Submitting .....</p>}
    {success && <p>User Added Successfully</p>}
    {errors && <p>{errors}</p>}

    <form action="" onSubmit={handleClick}>
        <input type="text" name='name' placeholder='your name' value={name} onChange={(e)=> setName(e.target.value)} required /> <br /> <br />

        <input type="email" name='email' placeholder='your email'value={email} onChange={(e)=> setEmail(e.target.value)} required /> <br /> <br />


        <button type='submit' >Add User</button>
        
    </form>
  </main>
  )
}

export default AddUser
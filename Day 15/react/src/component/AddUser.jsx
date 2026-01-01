import React from 'react'
import { useState } from 'react'
import { createUser } from '../api/userApi';

const AddUser = () => {
    const[name,setName]=useState("");
    const[email,setEmail]= useState("");


    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);
    const[success,setSuccess]=useState(false);




    const handleSubmit =  async (e)=>{
        e.preventDefault(); 


        setLoading(true);
        setError(null);
        setSuccess(false);

        try{
            const userData = {name,email};
            await createUser(userData);

            setSuccess(true);
            setName("");
            setEmail("");
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }


    };


    
  return (
   <main>
    <h2>Add User</h2>


    {loading && <p>Submitting....</p>}
    {error && <p>{error}</p>}
    {success && <p>User added successfully</p>}

    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Name' 
        value={name}
        onChange={(e)=> setName(e.target.value)} />

        <input type="email"
         placeholder='Email'
         value={email}
         onChange={(e)=> setEmail(e.target.value)} />

        <button type='submit'>
        Add user
        </button>
    </form>
   </main>
  )
}

export default AddUser
import { useEffect } from 'react';
import { useState } from 'react'
import { getUsers } from '../api/userApi';

const Users = () => {

    const[users,setUsers]= useState([]);
    const[error,setErrors]=useState(null);
    const[loading,setLoading]=useState(true);


useEffect(()=>{
    const fetchData= async()=>{
        try{
            const data = await getUsers(); // calling api function
            setUsers(data);
        }catch(error){
            setErrors(error.message);
        }finally{
            setLoading(false);
        }
    };
    fetchData();
},[]);


if(loading) 
    return <p>Loading...</p>;

if(error)
    return <p>{error}</p>;

  return (
 <main>
    <h2>Users List</h2>
    {users.map(user=>(
            <p key={user.id}>{user.name}</p>
    )) }
 </main>
  );
};

export default Users
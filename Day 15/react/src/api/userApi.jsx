import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/users";


export const createUser= async (userData)=>{  
    try{
        const res= await axios.post(API_URL, userData);  // sends data to server
        return res.data;  //server response
    }catch(error){
        throw new Error("Failed to create user");
    }
}
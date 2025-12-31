import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async()=>{
    try{
        const res= await axios.get(API_URL); //centralized url
        return res.data;

    }catch(error){
        throw new Error("API failed")
    }
};
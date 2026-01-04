import axios from 'axios';



const API_URL= "https://jsonplaceholder.typicode.com/users";

export const getUser = async()=>{
try{
    const response = await  axios.get(API_URL);
    return response.data;
}catch(error){
    throw new Error("API failed ")
}

}


export const createUser= async(userData)=>{
    try{
        const response= await axios.post(API_URL,userData);  // send data to the server 
        return response.data;
    }catch(error){
        throw new Error("User not added")
    }
}


export const updateUser = async (id,updatedData)=>{
    try{
        const response = await axios.put(`${API_URL}/${id}`,updatedData);
        return response.data;
    }catch(error){
        throw new Error("couldn't edit user")
    }
}



export const deleteUser = async (id)=>{
    try{
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    }catch(error){
        throw new Error("Couldn't delete")
    }
}
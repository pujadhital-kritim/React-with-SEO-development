import React from 'react'
import { useState,useRef } from 'react'
const AccessibleForm = () => {

    const[formData,setFormData]=useState({
        name:"",
        email:"",
     
    });
    const[errors,setErrors]=useState({});
    const[success,setSuccess]=useState(false);

    const nameRef= useRef(null);
    const emailRef= useRef(null);

    const handleChange =(e)=>{
        const{name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value
        });

        setErrors({
            ...errors,
            [name]:""
        });
    }

const validate=()=>{
const newErrors={};

    if(!formData.name){
        newErrors.name= "Name is required";
    }else if(formData.name.length < 3){
        newErrors.name="Atleast 3 characters are required";
    }

    if(!formData.email){
        newErrors.email= "Email is required";
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {       
     newErrors.email = "Email is not valid";
}
    return newErrors;
}

    const handleSubmit=(e)=>{
        e.preventDefault();

  const validateError= validate();
   setErrors(validateError);


   if(Object.keys(validateError).length===0){
    setSuccess(true);
    setFormData({name:"",email:""});
   }
    }
    
  return (
<main>
    <h1>Contact Form</h1>
<form onSubmit={handleSubmit} noValidate>
  <div>
    <label htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      ref={nameRef}
      aria-required="true"
      aria-invalid={!!errors.name}
    />
    {errors.name && <p>{errors.name}</p>}
  </div>

  <div>
    <label htmlFor="email">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      ref={emailRef}
      aria-required="true"
      aria-invalid={!!errors.email}
    />
    {errors.email && <p>{errors.email}</p>}
  </div>

  <button type="submit" disabled={!formData.name || !formData.email}>
    Submit
  </button>

  {success && <p>Form submitted successfully!</p>}
</form>


</main>
  )
}

export default AccessibleForm
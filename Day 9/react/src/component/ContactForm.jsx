import React from 'react'
import { useState } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    }
    );
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const validate = () => {

        let newErrors = {};

        // if(!formData.name || !formData.email || !formData.message){
        //     newErrors="All fields are required";
        // }
        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email field required";
        }

        if (!formData.message) {
            newErrors.message = "Message is required";
        }

        return newErrors;

    }


    const handleSubmit = (e) => {

        e.preventDefault();

        const validateError = validate();
        setError(validateError);

        if (Object.keys(validateError).length === 0) {
            console.log("Form submitted successfully", formData);
            setFormData({
                name: "",
                email: "",
                message: ""
            })
        }
    }

    return (
        <main>
            <h2>Contact Form </h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} required />
                {error.name && <p>{error.name}</p>}

                <label htmlFor="email">Email:</label>
                <input type="email" name='email' id='name' value={formData.email} onChange={handleChange} required />
                {error.email && <p>{error.email}</p>}

                <label htmlFor="message"> Your Message:</label>
                <input type="text" name='message' id='message' value={formData.message} onChange={handleChange} required />
                {error.message && <p>{error.message}</p>}


                <button type='submit' >Submit</button>

            </form>


        </main>
    )
}

export default ContactForm
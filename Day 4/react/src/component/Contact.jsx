import React, { useState } from 'react'

const Contact = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
 

    const[submittedData,setSubmittedData]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name,email,message);

        setSubmittedData({
            name,
            email,
            message,
        });

        setName("");
        setEmail("");
        setMessage("");

    }
  return (

 <main>

<header>
    <h1 className='heading'>Contact Me</h1>
    <p>Feel free to react out using the form below</p>
    </header>

    <section>
        <h2>Get in Touch</h2>
        <form action="">
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>

            <div>
            <label htmlFor="email">Email:</label>

            {/* react controls inputes from value{} */}
            {/* onChange is event handling for inputs */}
            <input type="email" id='email' value={email} onChange={(e)=> {setEmail(e.target.value)}} /> 
            </div>

            <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" value={message} onChange={(e)=> {setMessage(e.target.value)}}></textarea>

            </div>

            <button type='submit' onClick={handleSubmit}>Submit</button>

        </form>
    </section>

{submittedData && (
    <section>
        <h3>Submitted Data</h3>
        <p><strong>Name:</strong>{submittedData.name}</p>
        <p><strong>Email:</strong>{submittedData.email}</p>
        <p><strong>Message:</strong>{submittedData.message}</p>
        
    </section>
)}

</main>
  )
}

export default Contact
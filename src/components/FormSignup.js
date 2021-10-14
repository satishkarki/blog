import React from "react";
import "../style/Contact.css"
import { useState } from "react";

export default function FormSignup() {
  const [values, setValues]=useState({
    username:"",
    email:"",
    message:"",
  });

  const [submitted, setSubmitted]=useState(false);
  const [valid,setValid] =useState(false);

  const handleUserInputChange=(event)=>{
    setValues({...values, username:event.target.value})
  }
  const handleEmailInputChange=(event)=>{
    setValues({...values, email:event.target.value})
  }
  const handleMessageInputChange=(event)=>{
    setValues({...values, message:event.target.value})
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(values.username && values.email && values.message){
      setValid(true);
    }
    setSubmitted(true);
  }
  return(
    <form className="Form" onSubmit={handleSubmit} >
    <input className="input" 
    type="text" 
    placeholder="Name"
    name="username"
    value={values.username} 
    onChange={handleUserInputChange} />
    {submitted && !values.username? <span>Please enter a name.</span>:null}

    <input className="input"
      type="email"
      placeholder="Email"
      name="email"
      value={values.email} 
      onChange={handleEmailInputChange} />
      {submitted && !values.email? <span>Please enter a valid email.</span>:null}

    <input className=" messagebox input"
     type="text"
      placeholder="Message"
      name="message"
      value={values.message} 
      onChange={handleMessageInputChange}
        />
      {submitted && !values.message? <span>Send some message.</span>:null}
   
   
    <input className="submitbutton" type="submit" value="Submit"/>
    {submitted && valid ?<div className="success-message">Message Sent!!!</div>:null}
    
  </form>
  )
}
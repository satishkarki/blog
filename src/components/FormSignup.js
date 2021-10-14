// import React from "react";

// function Form (){
//   return (
    
     
//     <div className="form-content-right">
//        <form className="form">
//            <h1>Get in touch</h1>
      
//        <div className="form-inputs">
//            <label htmlFor="name"
//            className="form-label">
//                Name
//            </label>
//            <input 
//             id="name"
//             type="text"
//             name="username"
//             className="form-input"
//             placeholder="Enter your full name"
//             />
//        </div>

//        <div className="form-inputs">
//            <label htmlFor="email"
//            className="form-label">
//                Email
//            </label>
//            <input 
//             id="email"
//             type="email"
//             name="email"
//             className="form-input"
//             placeholder="Enter your email"
//             />
//        </div>

//        <div className="form-inputs">
//            <label htmlFor="message"
//            className="form-label">
//                Message
//            </label>
//            <input 
//             id="message"
//             type="text"
//             name="message"
//             className="form-input"
//             placeholder="Message"
//             />
//        </div>
//        </form>
//     </div>
   
//   );
// };

// export default Form;

import React from 'react';
import "../style/Contact.css"
import { useForm } from 'react-hook-form';


export default function FormSignup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <input className="input" type="text" placeholder="Name"  {...register("Name", {required: true, min: 3, maxLength: 80})} />
      {errors.Name && <p>Name Required</p>}
      <input className="input" type="email" placeholder="Email"  {...register("Email", {required: true, min: 5, maxLength: 30, pattern: /^\S+@\S+$/i})} />
      {errors.Email && <p>Invalid Email</p>}
      <input className=" messagebox input" type="text" placeholder="Message"  {...register("Message", {required:true, min: 10, maxLength: 250})} />
      {errors.Message && <p>Message Required</p>}
      {/* <input type="submit">Submit</input> */}
      <input className="submitbutton" type="submit" value="Submit"></input>
      {/* <button type="submit">Submit</button>  */}
    </form>
  );
}

// import React from "react";
// import {useForm} from "react-hook-form";
// import {yupResolver} from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema=yup.object().shape({
//     Name: yup.string().required(),
//     Email:yup.string().email().required(),
//     Message:yup.string().max(400).required()

// })

// function FormSignUp(){
//     const {register,handleSubmit, formState: { errors }}=useForm({resolver:yupResolver(schema),});
//     const submitForm=(data)=> {
//         console.log(data);
//     };
//     return(
//         <div className="Form">
//             <div className="tittle">Get in touch</div>
//             <div className="inputs">
//                 <form onSubmit={handleSubmit(submitForm)}>
//                     <input type="text" name="Name" placeholder="Full Name" ref={register}/>
//                     <p>{errors.Name?.message}</p>
//                     <input type="email" name="Email" placeholder="Your Email" ref={register}/>
//                     <p>{errors.Email?.message}</p>
//                     <input type="text" name="Message" placeholder="Message" ref={register}/>
//                     <p>{errors.Message?.message}</p>
//                     <input type="submit"  id="submit"/>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default FormSignUp;
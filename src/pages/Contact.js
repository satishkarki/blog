import React from "react";
import FormSignup from "../components/FormSignup"
import "../style/Contact.css"
import * as Fa from "react-icons/fa";
import {sociallinks} from "../components/socialmedia";
import Footer  from "../components/Footer";

function Contact() {
  const SocialLink=sociallinks.map((sociallink)=>
        
  <li key={sociallink.id}>
     <a href={sociallink.path} target="_blank" rel="noreferrer">
            {sociallink.icon}
      </a>
    </li>
);
  return (
    <section className="contact">
      <div className="title">
        <h2>Contact Me</h2>
    </div>
      <div className="formstyle">
       <div className="float-child">
       <h2 className="subheading">Get in touch</h2>
         <p>Let's talk about your project or your feedback. Let's make something awesome together.</p>
         <p className="contactadd"><Fa.FaMapMarkerAlt/> Mississauga, ON, Canada </p>
         <p className="contactadd"><Fa.FaEnvelope/> satishkarki52@gmail.com</p>
          <ul className=" contactmedia socialMedia">
            {SocialLink}
          </ul>
       </div>
      <div className="float-child">
        <h2>Email Me</h2>
        <FormSignup/>
      </div>
    </div>
    <Footer/>
    </section>
 
  );
}

export default Contact;
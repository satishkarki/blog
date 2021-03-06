import React from "react";
import profile from "../image/avatar.png"
// import { Link } from "react-router-dom";
import ScrollInfo from "../components/ScrollInfo";

import {sociallinks} from "../components/socialmedia";

import "../style/HomeIntro.css"
import Button from "../components/Button";


function HomeIntro() {

  const SocialLink=sociallinks.map((sociallink)=>
        
  <li key={sociallink.id}>
    <a href={sociallink.path} target="_blank" rel="noreferrer">
        {sociallink.icon}
    </a>
    </li>
);



  return (
   
    <section className="banner" id="banner">
       
      <div className="content">
        <ScrollInfo/> 
        <div className="imgBx">
          <img src={profile} alt="My Online Portfolio"/>
        </div>
        <h3>Satish Karki</h3>
       
        <p>Cybersecurity and Data Science Enthusiast</p>
        <Button/>
        <ul className="socialMedia">
          {SocialLink}
        </ul>
                    
      </div>
    </section>
  );
}

export default HomeIntro;
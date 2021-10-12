import React, {useState} from "react";
import "../style/About.css"
import {Education, Experience, Skills} from "../components/AboutCards"
import ThreeCards from "../components/CardButton";
import {
  AwesomeButton,

} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
function About() {
  const [activeCard, setactiveCard]=useState("SecondCard")

  return (
   <section className="about">
    <div class="title">
      <h2>About Me</h2>
    </div>
    <nav className="CardNav">
          
            <AwesomeButton className="CardButton" type="primary" onPress={()=>setactiveCard("FirstCard")}>Education</AwesomeButton>
            <AwesomeButton className="CardButton" type="primary" onPress={()=>setactiveCard("SecondCard")}>Skills</AwesomeButton>
            <AwesomeButton className="CardButton" type="primary" onPress={()=>setactiveCard("ThirdCard")}>Experience</AwesomeButton>
            
        
    </nav>
    <div> 
      {activeCard === "FirstCard" && <ThreeCards title={<Education/>}  />}
      {activeCard === "SecondCard" && <ThreeCards title={<Skills/>}/>}
      {activeCard === "ThirdCard" && <ThreeCards title={<Experience/>}/>}

    </div>
   
   </section>
  );
}

export default About;
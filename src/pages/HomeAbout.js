import React, {useState} from "react";
import "../style/HomeAbout.css"
import {Education, Experience, Skills} from "../components/AboutCards"
import ThreeCards from "../components/CardButton";
import {
  AwesomeButton,

} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
function HomeAbout() {
  const [activeCard, setactiveCard]=useState("FirstCard")

  return (
   <section className="about">
    <div className="title">
      <h2>About Me</h2>
    </div>
    <nav className="CardNav">
          
            <AwesomeButton className="CardButton" type="primary" onPress={()=>setactiveCard("FirstCard")}>Experience</AwesomeButton>
            <AwesomeButton className="CardButton" type="primary" onPress={()=>setactiveCard("SecondCard")}>Education</AwesomeButton>
            <AwesomeButton className="CardButton" type="primary" onPress={()=>setactiveCard("ThirdCard")}>Skills</AwesomeButton>
            
        
    </nav>
    <div> 
      {activeCard === "FirstCard" && <ThreeCards title={<Experience/>}  />}
      {activeCard === "SecondCard" && <ThreeCards title={<Education/>}/>}
      {activeCard === "ThirdCard" && <ThreeCards title={<Skills/>}/>}

    </div>
   
   </section>
  );
}

export default HomeAbout;
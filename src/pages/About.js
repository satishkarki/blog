import React, {useState} from "react";
import "../style/About.css"
import {Education, Experience, Skills} from "../components/AboutCards"
// import {Skills} from "../components/AboutCards"
import ThreeCards from "../components/CardButton";

function About() {
  const [activeCard, setactiveCard]=useState("SecondCard")

  return (
   <section className="about">
    <div class="title">
      <h2>About Me</h2>
    </div>
    <nav>
            <button onClick={()=>setactiveCard("FirstCard")}>Education</button>
            <button onClick={()=>setactiveCard("SecondCard")}>Skills</button> 
            <button onClick={()=>setactiveCard("ThirdCard")}>Experience</button>
       
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
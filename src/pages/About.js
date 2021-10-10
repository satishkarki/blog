import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import "../style/About.css"
import {EducationLinks} from "../components/TimelineElements"
import {FaUserGraduate, FaTools,FaWarehouse,} from "react-icons/fa";

function About() {


  function Education(){
    let darkbackground={background:"#1b1919", color: "whitesmoke"}
    return(
      <div>
        <VerticalTimeline>
          {
            EducationLinks.map(educationlink=>{
              return(
               <VerticalTimelineElement
                key={educationlink.id}
                date={educationlink.year}
                dateClassName="date"
                iconStyle={darkbackground}
                icon={<FaUserGraduate/>}
                >
                <h4 className="vertical-timeline-element-title">{educationlink.program}</h4>
                <h5 className="vertical-timeline-element-subtitle">{educationlink.collegeIcon} {educationlink.college}</h5>
                <h6 className="vertical-timeline-element-subtitle">{educationlink.locationIcon} {educationlink.location}</h6>

                </VerticalTimelineElement>

              
             
               
            )     
          })
        }
      </VerticalTimeline>
    </div>
  );
  }


  
 
  

  return (
   <section className="about">
    <div class="title">
      <h2>About Me</h2>
    </div>
    <h1 className="heading">Education</h1>
    <Education/>
   </section>
  );
}

export default About;
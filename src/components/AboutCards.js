import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import "../style/About.css"
import {EducationLinks} from "./TimelineElements";
import  {SkillLinks} from "./TimelineElementsTwo";
import  {ExperienceLinks} from "./TimelineElementsThree";
import * as Fa from "react-icons/fa";

 export function Education(){
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
                icon={<Fa.FaUserGraduate/>}
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


  export function Skills(){
    let darkbackground={background:"#1b1919", color: "whitesmoke"}
    return(
      <div>
        <VerticalTimeline>
          {
            
            SkillLinks.map(skillLink=>{
              return(
               <VerticalTimelineElement
                key={skillLink.id}
                date={skillLink.skillType}
                dateClassName="date"
                iconStyle={darkbackground}
                icon={<Fa.FaTools/>}
                >
                
                <h4 className="vertical-timeline-element-title">{skillLink.skills.map((sub)=> <li>{sub.skillicon} {sub.skillname}</li>)}</h4>
                {/* <h5 className="vertical-timeline-element-subtitle">{educationlink.collegeIcon} {educationlink.college}</h5>
                <h6 className="vertical-timeline-element-subtitle">{educationlink.locationIcon} {educationlink.location}</h6> */}

                </VerticalTimelineElement>

              
             
               
            )     
          })
        }
      </VerticalTimeline>
    </div>
  );
  }

  export function Experience(){
    let darkbackground={background:"#1b1919", color: "whitesmoke"}
    return(
      <div>
        <VerticalTimeline>
          {
            ExperienceLinks.map(experiencelink=>{
              return(
               <VerticalTimelineElement
                key={experiencelink.id}
                date={experiencelink.year}
                dateClassName="date"
                iconStyle={darkbackground}
                icon={<Fa.FaUserTie/>}
                >
                <h4 className="vertical-timeline-element-title">{experiencelink.Office}</h4>
                <h5 className="vertical-timeline-element-subtitle">{experiencelink.Position} </h5>
                <h6 className="vertical-timeline-element-subtitle">{experiencelink.Duty1}</h6>
                <h6 className="vertical-timeline-element-subtitle">{experiencelink.Duty2}</h6>
                <h6 className="vertical-timeline-element-subtitle">{experiencelink.Duty3}</h6>
                <h6 className="vertical-timeline-element-subtitle">{experiencelink.locationIcon} {experiencelink.location}</h6>

                </VerticalTimelineElement>

              
             
               
            )     
          })
        }
      </VerticalTimeline>
    </div>
  );
  }

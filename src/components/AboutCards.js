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
                <h1 className="eduProgram vertical-timeline-element-title">{educationlink.program}</h1>
                <h1 className="eduCollege vertical-timeline-element-subtitle">{educationlink.collegeIcon} {educationlink.college}</h1>
                <h6 className="eduLocation vertical-timeline-element-subtitle">{educationlink.locationIcon} {educationlink.location}</h6>

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
                
                <h4 className="vertical-timeline-element-title">{skillLink.skills.map((sub)=> <li className="SkillList">{sub.skillicon} {sub.skillname}</li>)}</h4>
                
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
                <h1 className="ExpPosition vertical-timeline-element-subtitle">{experiencelink.Position} </h1>
                <h1 className=" ExpOffice vertical-timeline-element-title">{experiencelink.Office}</h1>
                <li className="ExpDuty vertical-timeline-element-subtitle">{experiencelink.Duty1}</li>
                <li className="ExpDuty vertical-timeline-element-subtitle">{experiencelink.Duty2}</li>
                <li className="ExpDuty vertical-timeline-element-subtitle">{experiencelink.Duty3}</li>
                <h6 className="ExpLocation vertical-timeline-element-subtitle">{experiencelink.locationIcon} {experiencelink.location}</h6>

                </VerticalTimelineElement>

              
             
               
            )     
          })
        }
      </VerticalTimeline>
    </div>
  );
  }

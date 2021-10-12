import React from "react";
import * as Fa from "react-icons/fa";
import { DiJsBadge, } from "react-icons/di";
import {  SiJekyll,SiTableau,SiVmware,SiMicrosoftoffice,SiMongodb} from "react-icons/si";
import { VscTerminalPowershell} from "react-icons/vsc";
export const SkillLinks=[
    {
        id:1,
        skillType:'Programming Languages',
        skills:[
            {
                skillid:1,
                skillname:"Python",
                // skillname:"PYTHON-Numpy, SciPy, Pandas, SciKit-Learn, Matplotlib",
                skillicon:<Fa.FaPython/>
            },
            {
                skillid:2,
                skillname:"React",
                // skillname:"REACT-JSX, Router, Components, Props",
                skillicon:<Fa.FaReact/>
            },
            {
                skillid:3,
                skillname:"JavaScript",
                // skillname:"JAVASCRIPT-ES6, DOM Manipulation",
                skillicon:<DiJsBadge/>
            },
            {
                skillid:4,
                skillname:"Jekyll",
                skillicon:<SiJekyll/>

            },
            {
                skillid:5,
                skillname:"HTML5",
                skillicon:<Fa.FaHtml5/>

            },
            {
                skillid:6,
                skillname:"CSS3",
                skillicon:<Fa.FaCss3Alt/>

            }
        ]
    },
    {
        id:2,
        skillType:'Tools',
        skills:[
            {
                skillid:1,
                skillname:"git",
                // skillname:"GIT- WorkFlow, Branching & Merging",
                skillicon:<Fa.FaGit/>
            },
            {
                skillid:2,
                skillname:"Shell Scripting",
                // skillname:"COMMAND LINE-Piping and Redirection, Shell-scripting",
                skillicon:<VscTerminalPowershell/>
            },
            {
                skillid:3,
                skillname:"VMware",
                // skillname:"Vmware-RDP, VPN, AD DS, AWS Cloud Foundation",
                skillicon:<SiVmware/>
            },
            {
                skillid:4,
                skillname:"Office365",
                // skillname:"Office365:Word, Excel, PowerPoint, SharePoint, Outlook, Teams",
                skillicon:<SiMicrosoftoffice/>

            }
        ]
    },
    {
        id:3,
        skillType:'Database',
        skills:[
            {
                skillid:1,
                skillname:"MongoDB",
                // skillname:"MongoDB- Atlas, Robo 3T",
                skillicon:<SiMongodb/>
            },
            {
                skillid:2,
                skillname:"SQL",
                // skillname:"SQL-Basic CRUD, JOINS",
                skillicon:<Fa.FaDatabase/>
            },
            {
                skillid:3,
                skillname:"Tableau-Visualization",
                // skillname:"Tableau-Data Filtering, Outliers, Visualization",
                skillicon:<SiTableau/>
            }
      
        ]}
    
];

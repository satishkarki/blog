import React from "react";
var cv=require('../components/CV/Resume.pdf');

function CVDownload(){

    return(
        <button className="btn"
            type="btn"
            onClick={(e)=>{
                e.preventDefault();
                window.location.href={cv}
            }}
        > Download My CV</button>    
    );
}
export default CVDownload;
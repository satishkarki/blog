import React from "react";
function CVDownload(){
  const pdfview = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return(
      <button className="btn"
          type="btn"
          onClick={() => pdfview('https://drive.google.com/file/d/17ll0j0j9QN-RYMFyfeKZkOd1bmeae98b/view?usp=sharing')}
      > Download My CV</button>    
  );
}


export default CVDownload;
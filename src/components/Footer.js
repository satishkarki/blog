import "../style/Footer.css"
import {sociallinks} from "../components/socialmedia";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";
function Footer(){
    let d= new Date();
    let year=d.getFullYear();
    console.log(year)

    const SocialLink=sociallinks.map((sociallink)=>
        
    <li key={sociallink.id}>
      <Link to={sociallink.path} >
          {sociallink.icon}
      </Link>
      </li>
  );
    return(
        <div className="footerSection">
            <div className="copyright">
                <h1 className="foot">Satish Karki © {year} </h1>
                <p className="footp"><Fa.FaMapMarkerAlt/> Mississauga, ON, Canada </p>
                <p className="footp">Builtwith <Fa.FaReact/> React</p>
            </div>
            <div className="footermedia">
                <h1 className="foot">Get In Touch</h1>
                <ul className="footermedialogo socialMedia">
                    {SocialLink}
                </ul>
                
            </div>
            
            
        </div>
        
    )
}
export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import {navlinks} from "./NavItem";
import "../style/NavBar.css"
import {FaUserNinja} from "react-icons/fa";

function NavBar(){
    const NavMenu=navlinks.map((navlink)=>
        
        
            <li className="nav-item" key={navlink.id}>
            <Link to={navlink.path} >
                {navlink.icon}
                <span >{navlink.name}</span>
            </Link>
            </li>
            
    
  
   
    );

    const BrandName=(
        <div className="BrandDiv">
            <Link to="/" className="navlogo">
                <FaUserNinja/>
                <span className="logo-name">SATISH KARKI</span>
            </Link>
        </div>
    
      
    );
 
    return(
        <div className="Header">
            {BrandName}
            <ul className="nav-items">
            {NavMenu}
            </ul>
        </div>
    );
}
export default NavBar;
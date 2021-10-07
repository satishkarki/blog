import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {navlinks} from "./NavItem";
import "../style/NavBar.css"
import {FaUserNinja,FaBars,FaTimes} from "react-icons/fa";

function NavBar(){
    const[mobileView, setmobileView]=useState(false);
    const[sideBar,setsideBar]=useState(false);
   
    
    useEffect(()=>{
        const handleResize=()=>{
            window.innerWidth<1100?setmobileView(true):setmobileView(false);
        }
        window.addEventListener("resize",handleResize);
        return()=>{
            window.removeEventListener("resize",handleResize);
        }
    },[])

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
                <span className="logo-name">Satish Karki</span>
            </Link>
        </div>   
    );
  
    const SideBar=(
        <div className="sidebar-toggle">
            {!sideBar?(
                <FaBars className="sidebar-logo" onClick={()=>setsideBar(!sideBar)}/>
            ):
            (<FaTimes className="sidebar-logo" onClick={()=>setsideBar(!sideBar)}/>)}

        </div>
        
        
    );

    return(
        <div className="Header">
            {BrandName}
            {!mobileView && <ul className="nav-items">
            {NavMenu}
            </ul>}
            {mobileView && SideBar}
        </div>
    );
}
export default NavBar;
import React from "react";
import { Link } from "react-router-dom";
import {navlinks} from "./NavItem";


function NavBar(){
    const NavMenu=navlinks.map((navlink)=>
    <li key={navlink.id}>
        <Link to={navlink.path}>
        {navlink.icon}
        <span>{navlink.name}</span>
        </Link>
    </li>
    );
    return(
        <div>{NavMenu}</div>
    );
}
export default NavBar;
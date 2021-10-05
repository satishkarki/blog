import React from "react";
import { Link } from "react-router-dom";
import {navlinks} from "./NavItem";

function NavBar(){
    return(
        <div>
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/project">Project</Link>
            <Link to ="/blog">Blog</Link>
            <Link to ="/testimonial">Testimonial</Link>
            <Link to ="/contact">Contact</Link>
        </div>
    );
};


export default NavBar;
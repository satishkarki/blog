import React from "react";
import { Link } from "react-router-dom";
import {FaUserNinja} from "react-icons/fa";


function Brand(){
    const BrandName=(
        <Link to="/">
            <FaUserNinja/>
            SATISH KARKI
        </Link>
      
    );
    return(
        <ul>
            {BrandName}
        </ul>
    );
}
export default Brand;
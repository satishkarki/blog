import React from "react";
import Footer  from "../components/Footer";
import HomeAbout from "./HomeAbout";
import HomeIntro from "./HomeIntro";


function Home(){
    return(
        <>
            <HomeIntro/>
            <HomeAbout/>
            <Footer/>
        </>
    )
}
export default Home;
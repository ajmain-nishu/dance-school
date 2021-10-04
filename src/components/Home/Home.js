import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import HomeServices from "../HomeServices/HomeServices";
import Teacher from "../Teacher/Teacher";
import "./Home.css";



const Home = () => {
    return (
        <div>

            {/* home text */}
            <div className="home__bg text-center text-white">
                <h1 className="display-1 fw-bold">Dance School</h1>
                <h2 className="">Dance Classes For EveryBody</h2>
            </div>

            {/* other components call */}
            <About />
            <Teacher></Teacher>
            <HomeServices></HomeServices>
            <Contact></Contact>
            
        </div>
    );
};



export default Home;
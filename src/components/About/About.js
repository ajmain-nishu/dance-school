import React from "react";
import { Link } from "react-router-dom";
import aboutImgOne from "../../images/about_1.jpg";
import aboutImgTwo from "../../images/about_2.jpg";
import aboutImgThree from "../../images/about_3.jpg";
import "./About.css";

const About = () => {
    return (
        <div className="pt-2">
            <h2 className="text-center pt-5 mt-5 display-5 fw-bold">
                WELCOME TO OUR DANCE SCHOOL
            </h2>
            <div className="text-center px-md-5 px-1 mx-md-5 pb-5">
                <p className="px-md-5 px-1 mx-md-5 text-muted">
                    At Dance we offer all people an opportunity to join us for a trial
                    dance lesson to meet the teacher, and participate in a real class. If
                    you love it, your then welcome to join us{" "}
                </p>
            </div>

            <div className="d-flex flex-sm-row flex-column justify-content-center">
                <div className="about__img">
                    <img
                        className="w-100 h-100 rounded-circle"
                        src={aboutImgOne}
                        alt=""
                    />
                </div>
                <div className="about__img about__img__two">
                    <img
                        className="w-100 h-100 rounded-circle"
                        src={aboutImgTwo}
                        alt=""
                    />
                </div>
                <div className="about__img">
                    <img
                        className="w-100 h-100 rounded-circle"
                        src={aboutImgThree}
                        alt=""
                    />
                </div>
            </div>

            <div className="text-center px-md-5 px-1 mx-md-5 pt-5">
                <p className="px-md-5 px-1 mx-md-5 text-muted">
                    We are a professional in ballet, kids ballet, tap, freestyle & modern
                    theatre dance classes for any kind of years old. We keep the size of
                    our classes small in order for our students to receive high quality
                    dance tuition with great individual attention from our highly
                    experienced professional teachers.
                </p>
            </div>
            <div className="text-center pb-5 mb-5">
                <Link
                    to="/about"
                    className="text-decoration-none fs-2 text-secondary fw-bold"
                >
                    View More
                </Link>
            </div>
        </div>
    );
};

export default About;

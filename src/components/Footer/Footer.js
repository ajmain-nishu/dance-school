import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../../images/header_logo.png";



const Footer = () => {
    return (
        <div>
            <div className="text-center navbar__bg">
                {/* footer image */}
                <img className="py-4" src={footerLogo} alt="" />

                {/* footer text */}
                <p className="fs-5">Copyright &copy; 2021</p>
                <p className="fs-6">
                    Designed By:{" "}
                    <span className="fw-bold text-secondary">Ajmain Iqtidar Rahman</span>
                </p>

                {/* footer button */}
                <NavLink
                    className="text-decoration-none btn btn-secondary mb-4"
                    to="/contact"
                >
                    Contact Us
                </NavLink>
            </div>
        </div>
    );
};



export default Footer;
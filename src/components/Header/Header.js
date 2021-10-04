import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header_logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <img className="header__img" src={headerLogo} alt="Dancing School header logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active header__nav" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link header__nav" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link header__nav" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link header__nav" to="/contact">Contact</Link>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>




























        </div>
    );
};

export default Header;
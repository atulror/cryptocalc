import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "./ll.png"

export default class Navbar extends Component {
    
    render() {
        return (
            <>
                
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/home">

                                    <img src={logo} alt="logo" width="40" height="40" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className={`nav-link ${(window.location.href).indexOf("home") !== -1 ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${(window.location.href).indexOf("about") !== -1 ? "active" : ""}`} to="/about">AboutUs</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${(window.location.href).indexOf("business") !== -1 ? "active" : ""}`} to="/business">Business</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${(window.location.href).indexOf("entertainment") !== -1 ? "active" : ""}`} to="/entertainment">Entertainment</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${(window.location.href).indexOf("health") !== -1 ? "active" : ""}`} to="/health">Health</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${(window.location.href).indexOf("science") !== -1 ? "active" : ""}`} to="/science">Science</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${(window.location.href).indexOf("sports") !== -1 ? "active" : ""}`} to="/sports">Sports</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${(window.location.href).indexOf("tech") !== -1 ? "active" : ""}`} to="/tech">Technology</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div >

                </div >
            </>
        )
    }
}

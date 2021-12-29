import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";


const Header = () => {

    const location = useLocation().pathname;

    return(
        <div>    
            <div className="header">
            <p className="name">Writer App</p>
            <div className="items">
            <Link style={{color: location === "/" ? "white" : ""}} to="/" className="headerItem">Home</Link>
            <Link style={{color: location === "/about" ? "white" : ""}} to="/about" className="headerItem">About</Link>
            <Link style={{color: location === "/contact" ? "white" : ""}} to="/contact" className="headerItem">Contact</Link>
            <Link onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{color: location === "/web-version" || location === "/saved" ? "white" : ""}} to="/web-version" className="headerItem">Web-version</Link>
            </div>
            </div>
        </div>

    )
}

export default Header;
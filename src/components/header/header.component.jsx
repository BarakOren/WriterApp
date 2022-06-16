import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";


const Header = () => {

    const location = useLocation().pathname;

    return(
        <div className="header" style={{backgroundColor: location === "/" ?  "unset" : "#1C1C23"}}>
            <p className="name">Writer App</p>
            <div class="center">
            <Link style={{color: location === "/" ? "white" : ""}} to="/" className="headerItem">Home</Link>
            <Link style={{color: location === "/about" ? "white" : ""}} to="/about" className="headerItem">About</Link>
            </div>
            <Link class="web-version" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{color: location === "/web-version" || location === "/saved" ? "white" : ""}} to="/web-version" className="headerItem">Web-version</Link>
        </div>

    )
}

export default Header;
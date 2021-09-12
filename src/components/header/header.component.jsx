import React, {useState, useEffect} from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";


const Header = () => {

    const location = useLocation().pathname;

        const [dimensions, setDimensions] = useState(window.innerWidth)
        useEffect(() => {
          function handleResize() {
            setDimensions(window.innerWidth)    
            }
            window.addEventListener('resize', handleResize)
        },[dimensions])

    return(
        <div>    
            <div className="header">
            <p className="name">Writer App</p>
            <div className="items">
            <Link style={{color: location === "/WriterApp" ? "white" : ""}} to="/WriterApp" className="headerItem">Home</Link>
            <Link style={{color: location === "/WriterApp/about" ? "white" : ""}} to="/WriterApp/about" className="headerItem">About</Link>
            <Link style={{color: location === "/WriterApp/contact" ? "white" : ""}} to="/WriterApp/contact" className="headerItem">Contact</Link>
            <Link style={{color: location === "/WriterApp/web-version" || location === "/WriterApp/saved" ? "white" : ""}} to="/WriterApp/web-version" className="headerItem">Web-version</Link>
            </div>
            </div>
        </div>

    )
}

export default Header;
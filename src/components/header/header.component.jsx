import React, {useState, useEffect} from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";


const Header = () => {

    const location = useLocation().pathname;
    
    const styleOne = (location === "/") ? "white" : "";
    const styleTwo = (location === "/about") ? "white" : "";
    const styleThree = (location === "/contact") ? "white" : "";
    const styleFour = (location === "/web-version" || location === "/saved") ? "white" : "";

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
            <Link style={{color: styleOne}} to="/" className="headerItem">Home</Link>
            <Link style={{color: styleTwo}} to="/about" className="headerItem">About</Link>
            <Link style={{color: styleThree}} to="/contact" className="headerItem">Contact</Link>
            <Link style={{color: styleFour}} to="/web-version" className="headerItem">Web-version</Link>
            </div>
            </div>
        </div>

    )
}

export default Header;
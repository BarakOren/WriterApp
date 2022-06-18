import React, {useState} from "react";
import "./menu.styles.scss";
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import {Link} from "react-router-dom";
import { useLocation } from "react-router";

const Menu = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    const location = useLocation().pathname;

    return(
        <div class="container">
            <MenuIcon onClick={() => setMenuToggle(!menuToggle)} className="hamburger" style={{ color: grey[100], fontSize: 40 }} />

            <div className="menu" style={{left: menuToggle ? "0" : "-101vw"}}>
                <div className="itemContainer">
                    <Link style={{color: location === "/" ? "white" : "", borderColor: location === "/" ? "white" : ""}} to="/" onClick={() => setMenuToggle(false)} className="menuItem">Home</Link>
                    <Link style={{color: location === "/about" ? "white" : "", borderColor: location === "/about" ? "white" : ""}} to="/about" onClick={() => setMenuToggle(false)} className="menuItem">About</Link>
                    <Link style={{color: location === "/web-version" || location === "/saved" ? "white" : "", borderColor: location === "/web-version" ? "white" : "" || location === "/saved" ? "white" : ""}} to="/web-version" onClick={() => setMenuToggle(false)} className="menuItem">Web-Version</Link>
                </div>
            </div> 
        </div>
    )
}



export default Menu;
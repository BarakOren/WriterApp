import React, {useState} from "react";
import "./menu.styles.scss";
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import {Link} from "react-router-dom";
import { useLocation } from "react-router";

const Menu = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    var toggler = menuToggle ? "" : "hidden";
    const location = useLocation().pathname;

    return(
        <div>
            <MenuIcon onClick={() => setMenuToggle(!menuToggle)} className="hamburger" style={{ color: grey[100], fontSize: 40 }} />

            <div className={`menu ${toggler}`}>
                <div className="itemContainer">
                    <Link style={{color: location === "/WriterApp" ? "white" : "", borderColor: location === "/WriterApp" ? "white" : ""}} to="/WriterApp" onClick={() => setMenuToggle(false)} className="menuItem">Home</Link>
                    <Link style={{color: location === "/WriterApp/about" ? "white" : "", borderColor: location === "/WriterApp/about" ? "white" : ""}} to="/WriterApp/about" onClick={() => setMenuToggle(false)} className="menuItem">About</Link>
                    <Link style={{color: location === "/WriterApp/contact" ? "white" : "", borderColor: location === "/WriterApp/contact" ? "white" : ""}} to="/WriterApp/contact" onClick={() => setMenuToggle(false)} className="menuItem">Contact</Link>
                    <Link style={{color: location === "/WriterApp/web-version" || location === "/WriterApp/saved" ? "white" : "", borderColor: location === "/WriterApp/web-version" ? "white" : "" || location === "/WriterApp/saved" ? "white" : ""}} to="/WriterApp/web-version" onClick={() => setMenuToggle(false)} className="menuItem">Web-Version</Link>
            </div>

        </div>
        </div>
    )
}



export default Menu;
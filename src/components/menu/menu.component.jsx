import React, {useState} from "react";
import "./menu.styles.scss";
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import {Link} from "react-router-dom";

const Menu = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    var toggler = menuToggle ? "" : "hidden";

    return(
        <div>
            <MenuIcon onClick={() => setMenuToggle(!menuToggle)} style={{ fontSize: 80 }} className="hamburger" style={{ color: grey[100] }} />

            <div className={`menu ${toggler}`}>
                <div className="itemContainer">
                    <Link to="/WriterApp/" onClick={() => setMenuToggle(false)} className="menuItem">Home</Link>
                    <Link to="/WriterApp/about" onClick={() => setMenuToggle(false)} className="menuItem">About</Link>
                    <Link to="/WriterApp/contact" onClick={() => setMenuToggle(false)} className="menuItem">Contact</Link>
                    <Link to="/WriterApp/web-version" onClick={() => setMenuToggle(false)} className="menuItem">Web-Version</Link>
            </div>

        </div>
        </div>
    )
}



export default Menu;
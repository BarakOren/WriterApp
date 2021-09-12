import React from "react";
import "./homepage.styles.scss";
import Iphone from "../../assets/noshadow.png";
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import grey from '@material-ui/core/colors/grey';
import {Link} from "react-router-dom";

const HomePage = () => {

    function goToWebVersion(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="homepage">
            <div className="first">
                <div className="left">
                    <div>
                    <h1 className="title">Writer App</h1>
                    <p className="subtitle">choose smarter.</p>
                    </div>
                </div>

                <div className="right">
                    <img className="iphone" src={Iphone} alt="iphone" />
                    <div className="comingsoon">
                        <div className="box">
                            <AppleIcon className="icon" style={{fontSize: 30, color: grey[700]}} />
                            <p className="coming">COMING SOON</p>
                        </div>
                        <div className="box">
                            <ShopIcon className="icon" style={{fontSize: 30, color: grey[700]}} />
                            <p className="coming">COMING SOON</p>
                        </div>
                    </div>
                </div>

            </div> 
            {/* first end */}
            <div className="second">
                <div className="intro">
                    <p>We all been there, beginner or experts.
                    <br />
                    Staring at the paint for way too long, while the shop owner staring at us.
                    <br />
                    trying to figure it out in our heads.
                    <br />
                    So many options, never sure if what you picked gonna work well.
                    <br />
                    <br />
                    Writer App takes it away.
                    <br />
                    Writer contains all the spray-paint shades in the industry. simply choose the combination from your phone.
                    </p>
                </div>
            </div>




            <Link className="enjoyWebVersion" onClick={() => goToWebVersion()} to="/web-version">Enjoy The Web-Version</Link>

            
        </div>
    )
}

export default HomePage;
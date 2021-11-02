import React from "react";
import "./homepage.styles.scss";
import Iphone from "../../assets/noshadow.png";
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import LanguageIcon from '@material-ui/icons/Language';
import grey from '@material-ui/core/colors/grey';
import {Link} from "react-router-dom";
import { useHistory } from "react-router";


const HomePage = () => {

    const history = useHistory()

    function goToWebVersion(){
        history.push("/web-version")
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function openGoogle(){
        window.open("https://play.google.com/store/apps/details?id=com.writer.app", "_blank")
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
                        <div 
                        onClick={() => openGoogle()}
                            className="box">
                            <ShopIcon className="icon" style={{fontSize: 30, color: grey[100]}} />
                            <p className="coming">Google Play</p>
                        </div>
                        {/* <div className="box">
                            <AppleIcon className="icon" style={{fontSize: 30, color: grey[700]}} />
                            <p className="coming">COMING SOON</p>
                        </div> */}
                        <div className="box" onClick={() => goToWebVersion()}>
                            <LanguageIcon className="icon" style={{fontSize: 30, color: grey[100]}} />
                            <p className="coming">Web Version</p>
                        </div>
                    </div>
                </div>

            </div> 
            {/* first end */}
            <div className="second">
                <div className="intro">
                    <p>We have all been there, beginner or experts.
                    <br />
                    Staring at the paint for way too long, while the shop owner stares back at you.
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
            
        </div>
    )
}

export default HomePage;
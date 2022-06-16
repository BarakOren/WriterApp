import React from "react";
import "./homepage.styles.scss";
import Iphone from "../../assets/noshadow.png";
import { useHistory } from "react-router";
import iphone from "../../assets/iPhone.png"
import cubes from "../../assets/Cubes.png";

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
            <div class="color-bomb-top"></div>
            <div class="color-bomb-bottom"></div>
                <div className="left">
                    <div>
                    <h1 className="title">WRITER APP</h1>
                    <p className="subtitle">choose smarter.</p>
                    </div>
                    <div className="link-buttons">
                        <button className="link-button" onClick={() => openGoogle()}>Google Play</button>
                        <button className="link-button" onClick={() => goToWebVersion()}>Web Version</button>
                    </div>
                    <div className="intro">
                        <p>Writer contains all the spray-paint shades in the industry. simply choose the combination from your phone.</p>
                    </div>
                </div>

                <div className="right">
                    <div className="image-container">
                        <p className="free">Free</p>
                        <img className="iphone" src={iphone} alt="iphone" />
                    </div>
                    <div class="cubes-container">
                        <div className="fader"></div>
                        <img className="cubes" src={cubes} alt="effect" />
                    </div>
                    <div class="mobile-cubes-container">
                        <div className="fader"></div>
                        <img className="cubes" src={cubes} alt="effect" />
                    </div>
                    </div>

            {/* first end */}
            
        </div>
    )
}

export default HomePage;
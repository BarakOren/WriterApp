import React from "react";
import "./about.styles.scss";

const About = () => {
    return(
        <div className="about">
            <div className="aboutText">
            <h1 className="title">About us</h1>
            <p>Writer was created as a result of the frustration you can get from choosing your colors.
            <br />
            The beginners within us know this pain, and the more advanced writers remember this pain for sure. 
            <br />
            By having <span style={{fontWeight: "700"}}>all</span> the average shades in the professional paint industry, we can choose way faster, and not having a doubt about our choices.
            <br />
            <br />
            Writer will <span style={{fontWeight: "700"}}>not</span> save any of your data.
            </p>
            </div>
        </div>
    )
}

export default About;
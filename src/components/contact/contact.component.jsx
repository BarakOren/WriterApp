import React from "react";
import "./contact.styles.scss";
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';


const Contact = () => {

    function sizer(){
        if(window.screen.width > 800){
            return 60;
        } else {
            return 30;
        }
    }


    return(
        <div className="contact">
            <h1 className="title">Get In Touch</h1>
            <div className="contactContainer">
            <div className="email">
            <EmailIcon style={{fontSize: sizer(), color: pink[600]}}/>
            <p style={{margin: "0 0 0 20px"}}>writerapp02@gmail.com</p>
            </div>
            <div className="email">
            <InstagramIcon style={{fontSize: sizer(), color: grey[600]}}/>
            <p style={{margin: "0 0 0 20px"}}>IG will be up soon</p>
            </div>
            <div>
            
            </div>

            </div>
        </div>
    )
}

export default Contact;
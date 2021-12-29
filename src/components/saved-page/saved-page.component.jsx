import React from "react";
import "./saved-page.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeScheme } from "../../redux/web-version/web-version.actions";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import grey from '@material-ui/core/colors/grey';

const SavedPage = () => {

    const saved = useSelector(state => state.webVersionReducer.saved);
    const dispatch = useDispatch();

    function sizer(){
        if(window.innerWidth > 800){
            return 50
        } else if(window.innerWidth < 800){
            return 30
        }
    }

    return(
        <div className="savedPage">
            <h1>My Savings</h1>
            <Link to="/web-version">
                <ArrowBackIosIcon className="arrow" style={{ fontSize: sizer(), color: grey[0] }}/>
            </Link>
            <div className="pieces">
            {
                saved.length > 0 ?
                saved.map((item, index) => {
                    return(
                        <div className="piece" key={index}>
                            <div className="highlights" style={{backgroundColor: item.highlights}} />
                            <div className="force" style={{backgroundColor: item.powerline}} />
                            <div className="outline" style={{backgroundColor: item.outline}}></div>
                            <div className="fill" style={{backgroundColor: item.fill}}></div>
                            <div className="background" style={{backgroundColor: item.background}}></div>
                            {item.background === "#000000" && <div className="whiteBackground"></div>}
                            <HighlightOffIcon onClick={() => dispatch(removeScheme(item))} className="remove" style={{ color: grey[0]}} />
                        </div>
                        )}) 
                : <h1 className="noSavings">No Savings.</h1>
            }
            </div>
        </div>
    )
}

export default SavedPage;
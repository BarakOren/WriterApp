import React, {useEffect, useState} from "react";
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

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth)    
        }
        window.addEventListener('resize', handleResize)
    },[width])

    function sizer(){
        if(width > 800){
            return 50
        } else if(width < 800){
            return 30
        }
    }

    return(
        <div className="savedPage">
        <h1>My Savings</h1>
        <Link to="/WriterApp/web-version">
        <ArrowBackIosIcon className="arrow" style={{ fontSize: sizer(), color: grey[0] }}/>
        </Link>
        <div className="pieces">
            {
                saved.length === 0 && <h1 className="noSavings">No Savings.</h1>
            }

        {
            saved.length >= 0 &&
            saved.map((item, index) => {
                return(
                    <div className="piece" key={index}>
                    <div className="highlights" style={{backgroundColor: item.highlightsVar}} />
                    <div className="force" style={{backgroundColor: item.powerlineVar}} />
                    <div className="outline" style={{backgroundColor: item.outline}}></div>
                    <div className="fill" style={{backgroundColor: item.fill}}></div>
                    <div className="background" style={{backgroundColor: item.background}}></div>
                    {item.background === "#000000" && <div className="whiteBackground"></div>}
                    <HighlightOffIcon onClick={() => dispatch(removeScheme(item))} className="remove" style={{ color: grey[0]}} />
                    </div>
                )
            })
        }
            </div>
        </div>
    )
}

export default SavedPage;
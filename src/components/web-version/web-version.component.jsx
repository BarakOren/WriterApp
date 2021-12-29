import React, {useState, useEffect} from "react";
import "./web-version.styles.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory, selectPressure, saveScheme} from "../../redux/web-version/web-version.actions";
import Outline from "./buttons/outline.component";
import Fill from "./buttons/fill.component";
import Background from "./buttons/background.component";
import ForceLine from "./buttons/forceLine.component";
import HighLights from "./buttons/highLights.component";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const WebVesrion = () => {

    const dispatch = useDispatch();

    const [showHighlights, setShowHighlights] = useState(true);
    const [showPowerLine, setShowPowerLine] = useState(true);

    const changeHighlights = () => {
        setShowHighlights(!showHighlights)
    };

    const changePowerLine = () => {
        setShowPowerLine(!showPowerLine)
    };

    const categoryState = useSelector(state => state.webVersionReducer.category);
    const PressureState = useSelector(state => state.webVersionReducer.pressure);
    const outline = useSelector(state => state.webVersionReducer.outline);
    const fill = useSelector(state => state.webVersionReducer.fill);
    const background = useSelector(state => state.webVersionReducer.background);
    const powerline = useSelector(state => state.webVersionReducer.powerline);
    const highlights = useSelector(state => state.webVersionReducer.highlights);

    function schemeSaver(){
        const scheme = {outline, fill, background}
        if(showPowerLine){Object.assign(scheme, {powerline})}
        if(showHighlights){Object.assign(scheme, {highlights})}
        dispatch(saveScheme(scheme));
    }

    const [position, setPosition] = useState(null);

    useEffect(() => {
        function handleScroll(){
            if(window.pageYOffset > 50 && position === false){
                setPosition(true);
            } else if(window.pageYOffset > 50 && position === null){
                setPosition(true);
            }
            else if (window.pageYOffset < 50 && position === true ) {
                setPosition(false);
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () =>  document.removeEventListener('scroll', handleScroll)
    }, [position])
        

    return(
        <div className="webVersion">
            <div className="piece">
                {showHighlights && <div className={`${(position ? "smaller" : "")} highlights`} style={{backgroundColor: highlights}} />}
                {showPowerLine && <div className={`${(position ? "smaller" : "")} force`} style={{backgroundColor: powerline}} /> }
                <div className={`${(position ? "smaller" : "")} outline`} style={{backgroundColor: outline}}></div>
                <div className={`${(position ? "smaller" : "")} fill`} style={{backgroundColor: fill}}></div>
                <div className={`${(position ? "smaller" : "")} background`} style={{backgroundColor: background}}></div>
                {(window.innerWidth < 800) && background === "#000000" && <div className="whiteBackground"></div>}
                {(window.innerWidth > 800) && background === "#000000" && <div className={`${(position ? "smaller" : "")} whiteBackground`}></div>}
            </div>
            {categoryState === "outline" && <Outline />}   
            {categoryState === "fill" && <Fill />}   
            {categoryState === "background" && <Background />}   
            {categoryState === "powerline" && <ForceLine />}   
            {categoryState === "highlights" && <HighLights />}   
            <div className="settings">
                <div className="switchButtons">
                    <button onClick={() => dispatch(selectCategory("outline"))} className={`${categoryState === "outline" ? "selectedCategory" : ""} switchButton`}>Outline</button>
                    <button onClick={() => dispatch(selectCategory("fill"))} className={`${categoryState === "fill" ? "selectedCategory" : ""} switchButton`}>Fill</button>
                    <button onClick={() => dispatch(selectCategory("background"))} className={`${categoryState === "background" ? "selectedCategory" : ""} switchButton`}>Background</button>
                    <button onClick={() => dispatch(selectCategory("powerline"))} disabled={!showPowerLine} className={`${categoryState === "powerline" && showPowerLine === true ? "selectedCategory" : ""} ${showPowerLine ? "switchButton" : "switchButtonOff"}`}>Power-line</button>
                    <button onClick={() => dispatch(selectCategory("highlights"))} className={`${categoryState === "highlights" && showHighlights === true ? "selectedCategory" : ""} ${showHighlights ? "switchButton" : "switchButtonOff"}`}>Highlights</button>
                </div>
                    
                <p style={{color: "#3e3e3e", margin: "1.5vh"}}>Settings</p>
                <div style={{borderBottom: "1px solid #3e3e3e", width: "90%"}}></div>
                    <div className="switchPressureButtons">
                        <button onClick={() => dispatch(selectPressure("highPressure"))} className={`${PressureState === "highPressure" ? "selectedPressureCategory" : ""} switchPressureButton`}>High Pressure Cans</button>
                        <button onClick={() => dispatch(selectPressure("lowPressure"))} className={`${PressureState === "lowPressure" ? "selectedPressureCategory" : ""} switchPressureButton`}>Low Pressure Cans</button>
                    </div>

                <FormGroup className="switchesContainer">
                    <p className="switchLabel">Power-line</p>
                    <FormControlLabel
                        control={<Switch size="medium" checked={showPowerLine} onChange={changePowerLine} color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />}
                    />

                    <p className="switchLabel">Highlights</p>
                    <FormControlLabel
                        control={<Switch size="medium" checked={showHighlights} onChange={changeHighlights} color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />}
                    />   
                </FormGroup>
                 
                <button className="saveButton" onClick={() => schemeSaver()} style={{borderColor: outline, backgroundColor: fill, color: outline }}>Save Scheme</button>
                <Link onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} to="/saved" className="saveButton colors">My Savings</Link>
                    
            </div>
        </div>
    )


        
}

export default WebVesrion;
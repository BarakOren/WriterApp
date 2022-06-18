import React from "react";
import "./settings.scss";
import Switch from "./switch/switch"
import { useSelector, useDispatch } from "react-redux";
import { selectPressure } from "../../../redux/web-version/web-version.actions";
import { Link } from "react-router-dom";

const Settings = (props) => {
    const {schemeSaver, showHighlights, setShowHighlights, showPowerLine, setShowPowerLine} = props
    const dispatch = useDispatch()
    const PressureState = useSelector(state => state.webVersionReducer.pressure);

    return (
        <div className="settings">
            <p className="settings-title">Settings</p>
            <div className="row">
                <div>
                    <button onClick={() => dispatch(selectPressure("highPressure"))} className={`pressure-button ${PressureState === "highPressure" ? "selected-pressure" : ""} `}>High Pressure</button>
                    <button onClick={() => dispatch(selectPressure("lowPressure"))} className={`pressure-button ${PressureState === "lowPressure" ? "selected-pressure" : ""} `}>Low Pressure</button>       
                </div>
                <div>
                    <label for="powerlineswitch">Power-line</label>
                    <Switch state={showPowerLine} func={setShowPowerLine} />
                    <label for="highlightsswitch">Highlights</label>
                    <Switch state={showHighlights} func={setShowHighlights} />
                </div>
            </div>
            <button className="saveButton" onClick={() => schemeSaver()}>Save Scheme</button>
            <Link onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} to="/saved" className="mySavingsLink">My Savings</Link>
       <div className="settings-color-bomb"></div>
        </div>
    )
}

export default Settings
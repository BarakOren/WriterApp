import React from "react";
import "./switch.scss";

const Switch = (props) => {
    const {state, func} = props
    function switcher(){
        func(!state)
    }
    
    return <label className="switch">
    <input type="checkbox" checked={state} onChange={switcher}/>
    <span className="slider round"></span>
    </label>
}

export default Switch;
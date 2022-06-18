import React from "react"
import "./bottom-nav.scss"
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../../redux/web-version/web-version.actions"
import { useEffect, useState } from "react";

const BottomNav = (props) => {
    const dispatch = useDispatch()
    const categoryState = useSelector(state => state.webVersionReducer.category);
    const {showPowerLine, showHighlights} = props
  
const [atBottom, setAtBottom] = useState(false)
const [width, setWidth] = useState(false)

const checkBottom = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        setAtBottom(true)
    } else {
        setAtBottom(false)
    }
}

const checkWidth = () => {
if(window.innerWidth < 800){setWidth(true)}
else{setWidth(false)}
}


useEffect(() => {
    if(window.innerWidth < 800){setWidth(true)}
    else{setWidth(false)}

    document.addEventListener('scroll', checkBottom)
    window.addEventListener('resize', checkWidth)
    return () => {
        window.removeEventListener('resize', checkWidth);
        document.removeEventListener('scroll', checkBottom);
    };
}, []);

    return (
        <div className="bottom-nav-container">
<div className="bottom-nav">
            <button 
            className={categoryState === "outline" ? "selected-nav" : ""} 
            onClick={() => dispatch(selectCategory("outline"))}>
                {width ? "O" : "Outline"}
            </button>
            
            <button 
            className={categoryState === "fill" ? "selected-nav" : ""} 
            onClick={() => dispatch(selectCategory("fill"))}>
                {width? "F" : "Fill"}
            </button>
            
            <button 
            className={categoryState === "background" ? "selected-nav" : ""} 
            onClick={() => dispatch(selectCategory("background"))}>
                {width ? "B" : "Background"}
            </button>    
            
            <button 
            className={categoryState === "powerline" ? "selected-nav" : ""} 
            onClick={() => dispatch(selectCategory("powerline"))}
            disabled={!showPowerLine}
            >
                {width ? "P" : "Powerline"}
            </button>
            
            <button 
            className={categoryState === "highlights" ? "selected-nav" : ""} 
            onClick={() => dispatch(selectCategory("highlights"))}
            disabled={!showHighlights}
            >
                {width ? "H" : "HighLights"}
            </button>
        </div>
        <div className="nav-fader" style={{opacity: atBottom ? "0" : "1"}}></div>
        </div>
        

    )
}

export default BottomNav
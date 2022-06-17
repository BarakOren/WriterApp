import React from "react"
import "./bottom-nav.scss"
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../../redux/web-version/web-version.actions"

const BottomNav = () => {
    const dispatch = useDispatch()
    const categoryState = useSelector(state => state.webVersionReducer.category);

    return (
        <div className="bottom-nav">
            <button className={categoryState === "outline" ? "selected" : ""} onClick={() => dispatch(selectCategory("outline"))}>Outline</button>
            <button className={categoryState === "fill" ? "selected" : ""} onClick={() => dispatch(selectCategory("fill"))}>Fill</button>
            <button className={categoryState === "background" ? "selected" : ""} onClick={() => dispatch(selectCategory("background"))}>Background</button>    
            <button className={categoryState === "powerline" ? "selected" : ""} onClick={() => dispatch(selectCategory("powerline"))}>Powerline</button>
            <button className={categoryState === "highlights" ? "selected" : ""} onClick={() => dispatch(selectCategory("highlights"))}>HighLights</button>
        
        </div>
    )
}

export default BottomNav
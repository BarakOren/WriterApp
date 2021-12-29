import React from "react";
import "./buttons.styles.scss";
import highPressure from "./high-pressure";
import lowPressure from "./low-pressure";
import { useDispatch, useSelector } from "react-redux";
import { selectOutline } from "../../../redux/web-version/web-version.actions";

const Outline = () => {
    const dispatch = useDispatch();
    const selectedButton = useSelector(state => state.webVersionReducer.outline);
    const selectedPressure = useSelector(state => state.webVersionReducer.pressure);

    function pressure(){
        if(selectedPressure === "highPressure"){
            return highPressure;
        } else {
            return lowPressure;
        }
    }

        return(
            <div className="buttons">
                {
                    pressure().map(({id}, index) => (
                        <div key={index} 
                            className={`${selectedButton === id ? "selected" : ""} ${id === "#000000" ? "black" : "" } button `}
                            onClick={() => dispatch(selectOutline(id))}
                            style={{backgroundColor: id}}>
                            </div> 
                    ))
                }
            </div>
        )
    }

export default Outline;
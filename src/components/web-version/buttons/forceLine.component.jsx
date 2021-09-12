import React from "react";
import "./buttons.styles.scss";
import highPressure from "./high-pressure";
import lowPressure from "./low-pressure";
import { useSelector, useDispatch } from "react-redux";
import { selectPowerLine } from "../../../redux/web-version/web-version.actions";

const ForceLine = () => {

    const dispatch = useDispatch();

    const selectedButton = useSelector(state => state.webVersionReducer.powerline);
    //this.props.selectedButton;
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
                       className={`
                       ${selectedButton === id ? "selected" : ""} 
                       ${id === "#000000" ? "black" : "" }
                       button `}
                       style={{
                           backgroundColor: id
                       }}
                       onClick={() => dispatch(selectPowerLine(id))}
                       ></div> 
                    ))
                }
            </div>
        )
    }


export default ForceLine;
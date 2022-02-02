import React from 'react';
import { HiXCircle } from "react-icons/hi";

function popUp(props) {
    return (props.trigger) ? (
        <div className="overlay">
    <div className="popUp">
        <div className="popUpContainer">
        <HiXCircle onClick={() => props.setTrigger(false)} /></div>
        <div>{ props.children } </div> 
        </div>
     </div>
    ) : ""
}

export default popUp;


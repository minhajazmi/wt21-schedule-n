import React from 'react';
import { BsXLg } from "react-icons/bs";

function popUpLog(props) {
    return (props.trigger) ? (
        <div className="overlayLog">
    <div className="signUpContainer">
        <div className="popUpContainer">
        <BsXLg onClick={() => props.setTrigger(false)} /></div>
        <div>{ props.children } </div>
        </div>
     </div>
    ) : ""
}

export default popUpLog;



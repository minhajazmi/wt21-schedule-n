import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';
import logo from './images/Logo.svg';

function Header() {
const navigate = useNavigate();
    return (
        <div className="header">
            <div className="headerItem1">
                <img src={logo} alt="Logo" />
            </div> 
            <div className="headerItem1">
                <h1>How we help you?</h1></div>
            <div className="headerItem1">
                <h1>Main features</h1></div>
            <div className="headerItem2">
                log in</div>
            <div className="headerItem2">
                <button className="primaryButton" onClick={() => navigate("/result")}>Sign up for free</button>
            </div>


            
        </div>
    
    
    )
};

export default Header;

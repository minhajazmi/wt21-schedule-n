import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import logo from './images/Logo.svg';

function Header() {
const navigate = useNavigate();
    return (
        <div className="header">
            <div>
                <img src={logo} alt="Logo" />
            </div> 
            <div  className="headerItem">
                <div><h1>How we help you?</h1></div>
                 <div><h1>Main features</h1></div>
            </div>
            <div className="headerItem">
                <div>log in</div>
                <button className="primaryButton" onClick={() => navigate("/")}>Sign up for free</button>
            </div>
        </div>
    
    
    )
};

export default Header;

import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Footer.css';

function Footer() {
const navigate = useNavigate();
    return (
        <div className="footer">
            <ol>
                <li>Take a quiz and get advice</li>
                <li>Hear useful advice from people like you</li>
                <li>Get update with best solutions and advice</li>
            </ol>
        </div>
    )
};

export default Footer;

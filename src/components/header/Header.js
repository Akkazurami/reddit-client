import React from "react";

import logo from '../../assets/reddit-alien.png';
import './Header.css';

export default function Header(props) {
    return (
        <header>
            <img id="logo" src={logo} alt="Reddit alien logo." />
            <h1>Reddit<strong>Focus</strong></h1>
        </header>
    )
}
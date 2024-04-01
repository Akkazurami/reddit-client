import React from "react";

import logo from '../../assets/reddit-alien.png';
import './Header.css';

import { SearchBar } from "../../features/searchbar/SearchBar";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
            <div className="header">
                <img id="logo" src={logo} alt="Reddit alien logo." />
                <Link to={`../`}><h1>Reddit<strong>Focus</strong></h1></Link>
            </div>
            <SearchBar />
        </header>
    )
}
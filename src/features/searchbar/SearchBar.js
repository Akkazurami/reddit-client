import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './SearchBar.css';
import search from '../../assets/search.png';

import { changeSearchTerm, clearSearchTerm, selectSearchTerm } from "./searchBarSlice";
import { searchArticles } from "../articlelist/articlesSlice";

export function SearchBar() {
    const dispatch = useDispatch();

    const searchTerm = useSelector(selectSearchTerm);

    const handleChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(searchArticles(searchTerm));
            dispatch(clearSearchTerm());
        }
    }


    return (
        <div className="search">
            <input id="input" value={searchTerm} onChange={handleChange} onKeyDown={handleKeyDown}/>
            <img id="search" src={search} alt="Search icon." />
        </div>
    )
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Categories.css';

import { changeCategory, selectCategory } from './categoriesSlice';

const categories = [
    "Popular",
    "Politics",
    "Writing"
];

export default function Categories(props) {
    const dispatch = useDispatch();

    const category = useSelector(selectCategory);

    const handleClick = (e) => {
        dispatch(changeCategory(e.target.innerHTML));
    }
    
    return (
        <section className='categories'>
            <h3>Categories</h3>
            <ul>
                {categories.map(option => {
                    if (option === category) {
                        return <Link to={`../category/${option}`} ><li className='active' key={option}>{option}</li></Link> 
                    } else {
                        return <Link to={`../category/${option}`} ><li onClick={handleClick} key={option}>{option}</li></Link>
                    }
                })}
            </ul>
        </section>
    )
}
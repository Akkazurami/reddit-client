import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Categories.css';

import { changeCategory, selectCategory } from './categoriesSlice';

const categories = [
    "Popular",
    "News",
    "Politics",
    "Writing",
    "Gaming"
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
                        return <Link to={`../category/${option}`} key={option}><li className='active' >{option}</li></Link> 
                    } else {
                        return <Link to={`../category/${option}`} key={option}><li onClick={handleClick} >{option}</li></Link>
                    }
                })}
            </ul>
        </section>
    )
}
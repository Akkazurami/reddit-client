import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
                        return <li className='active'>{option}</li>
                    } else {
                        return <li onClick={handleClick}>{option}</li>
                    }
                })}
            </ul>
        </section>
    )
}
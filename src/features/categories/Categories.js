import React from 'react';

import './Categories.css';

const categories = [
    "Popular",
    "Politics",
    "Writing"
];

const currentCategory = "Popular"

export default function Categories(props) {
    return (
        <section className='categories'>
            <h3>Categories</h3>
            <ul>
                {categories.map(category => {
                    if (currentCategory === category) {
                        return <li className='active'>{category}</li>
                    } else {
                        return <li>{category}</li>
                    }
                })}
            </ul>
        </section>
    )
}
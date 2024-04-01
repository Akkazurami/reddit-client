import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faMessage } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

export default function Card({article}) {
    return (
        <article>
            <div className='vote'>
                <FontAwesomeIcon icon={faArrowUp} color='darkgray'/>
                <span>{article.voteCount}</span>
                <FontAwesomeIcon icon={faArrowDown} color='darkgray'/>
            </div>
            <div className='card'>
                <h2>{article.title}</h2>
                <img src={article.imgSrc} />
                <div className='divider' />
                <div className='byline'>
                    <p>Posted by <span className='author'>{article.author}</span></p>
                    <p>{article.time}</p>
                    <p> | </p>
                    <div className='comments'>
                        <FontAwesomeIcon icon={faMessage} color='darkgray'/>
                        <p>{article.commentCount}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}
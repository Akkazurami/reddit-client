import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faMessage } from '@fortawesome/free-solid-svg-icons';
import redditAlien from '../../assets/reddit-alien.png';
import './Article.css';

export default function Article(props) {
    return (
        <article>
            <div className='vote'>
                <FontAwesomeIcon icon={faArrowUp} color='darkgray'/>
                <span>123</span>
                <FontAwesomeIcon icon={faArrowDown} color='darkgray'/>
            </div>
            <div className='article'>
                <h2>This is an article title!</h2>
                <img src={redditAlien} />
                <div className='divider' />
                <div className='byline'>
                    <p>Posted by <span className='author'>Author</span></p>
                    <p>1 hour ago</p>
                    <p> | </p>
                    <div className='comments'>
                        <FontAwesomeIcon icon={faMessage} color='darkgray'/>
                        <p>456</p>
                    </div>
                </div>
            </div>
        </article>
    )
}
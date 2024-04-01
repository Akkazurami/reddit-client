import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faMessage } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import { Link } from 'react-router-dom';

import { changeCurrentArticle } from '../../features/articlelist/articlesSlice';
import { useDispatch } from 'react-redux';

export default function Card({article}) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeCurrentArticle(article.id));
    }

    return (
        <article>
            <div className='vote'>
                <FontAwesomeIcon icon={faArrowUp} color='darkgray'/>
                <span>{article.voteCount}</span>
                <FontAwesomeIcon icon={faArrowDown} color='darkgray'/>
            </div>
            <div className='card'>
                <Link to={`../article/${article.id}`}><h2 className='card-title' onClick={handleClick}>{article.title}</h2></Link>
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
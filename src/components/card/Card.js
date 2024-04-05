import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faMessage } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
import { Link } from 'react-router-dom';

import { changeCurrentArticle, clearComments, loadArticle, selectArticles } from '../../features/articlelist/articlesSlice';
import { useDispatch, useSelector } from 'react-redux';

import { timeSinceCreation } from '../../util/util';

export default function Card({article}) {
    const dispatch = useDispatch();

    const articles = useSelector(selectArticles);

    const handleClick = () => {
        const currentArticle = articles.filter(listArticle => article.data.id === listArticle.data.id)[0];
        dispatch(clearComments());
        dispatch(changeCurrentArticle(currentArticle));
        dispatch(loadArticle(currentArticle.data.id));
    }

    let content;
    if (article.data.is_video) {
        content = <video typeof="video/mp4" src={article.data.secure_media.reddit_video.fallback_url} width="80%" controls ></video>
    } else if (article.data.post_hint === "image") {
        content = <img src={article.data.url} alt='post image'/>
    } else {
        
    }

    const timeSince = timeSinceCreation(article.data.created);

    return (
        <article key={article.data.id}>
            <div className='vote'>    
                <FontAwesomeIcon icon={faArrowUp} color='darkgray'/>
                <span>{article.data.score}</span>
                <FontAwesomeIcon icon={faArrowDown} color='darkgray'/>
            </div>
            <div className='card'>
                <Link to={`../article/${article.data.id}`}><h2 className='card-title' onClick={handleClick}>{article.data.title}</h2></Link>
                <p className='subreddit'>r/{article.data.subreddit}</p>
                {content}
                <div className='divider' />
                <div className='byline'>
                    <p>Posted by <span className='author'>{article.data.author}</span></p>
                    <p>{timeSince}</p>
                    <p> | </p>
                    <div id='comments'>
                        <FontAwesomeIcon icon={faMessage} color='darkgray'/>
                        <p>{article.data.num_comments}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}
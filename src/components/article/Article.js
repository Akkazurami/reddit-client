import React, { useEffect } from "react";

import './Article.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { selectCurrentArticle, loadArticle } from "../../features/articlelist/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../../features/commentlist/CommentList";
import { timeSinceCreation } from "../../util/util";
import { useParams } from "react-router-dom";

export default function Article(props) {
    const dispatch = useDispatch();

    const article = useSelector(selectCurrentArticle);

    let { articleId } = useParams();

    useEffect(() => {
        if (!article) {
            dispatch(loadArticle(articleId))
        }    
    })

    if (!article) {
        return (
            <article className="article">
                <p id="loading">...Loading Article</p>
            </article>
        )
    }
    
    console.log(article);

    let content;
    if (article.data.post_hint === "image") {
        content = (<img src={article.data.url} alt="post image"/>)
    } else if (article.data.post_hint === "hosted:video") {
        content = (<video typeof="video/mp4" src={article.data.secure_media.reddit_video.fallback_url} width="80%" controls />)
    } else {
        content = (<p>{article.data.selftext}</p>)
    }

    const timeSince = timeSinceCreation(article.data.created);
    
    return (
        <article className="article">
            <div className="title">
                <h2 className="article-title">{article.data.title}</h2>
                <div className="divider" />
                <div className="byline">
                    <p>Posted by <span className="author">{article.data.author}</span></p>
                    <p>r/{article.data.subreddit}</p>
                    <p>{timeSince}</p>
                </div>
            </div>
            <div className="body">
                <div className="vote">
                    <FontAwesomeIcon icon={faArrowUp} color='darkgray' />
                    <span>{article.data.score}</span>
                    <FontAwesomeIcon icon={faArrowDown} color="darkgray" />
                </div>
                <div className="text">
                    {content}
               </div>
            </div>
            <CommentList />
        </article>
    )
}
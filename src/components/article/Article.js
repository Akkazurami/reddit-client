import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import './Article.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { selectCurrentArticle, loadArticle, selectComments } from "../../features/articlelist/articlesSlice";
import { timeSinceCreation } from "../../util/util";

import CommentList from "../../features/commentlist/CommentList";

export default function Article(props) {
    const dispatch = useDispatch();

    const article = useSelector(selectCurrentArticle);
    const comments = useSelector(selectComments);

    let { articleId } = useParams();

    useEffect(() => {
        if (!article) {
            dispatch(loadArticle(articleId))
        }    
    })

    useEffect(() => {
        if (!comments) {
            dispatch(loadArticle(articleId));
        }
    }, [comments, dispatch])

    if (!article) {
        return (
            <article className="article">
                <p id="loading">Loading Article...</p>
            </article>
        )
    }

    let content;
    if (article.data.post_hint === "image") {
        content = (<div className="text"><img src={article.data.url} alt="post image"/></div>)
    } else if (article.data.post_hint === "hosted:video") {
        content = (<div className="text"><video typeof="video/mp4" src={article.data.secure_media.reddit_video.fallback_url} width="80%" controls /></div>)
    } else {
        const text = article.data.selftext.split("\n");
        content = (
            <div className="text">
                {text.map(paragraph => {
                    return <p>{paragraph}</p>
                })}
            </div>
        )
    }

    const timeSince = timeSinceCreation(article.data.created);
    
    return (
        <article className="article">
            <div className="title">
                <h2 className="article-title">{article.data.title}</h2>
                <div className="divider" />
                <div className="details">
                    <div className="vote">
                        <FontAwesomeIcon icon={faArrowUp} color='darkgray' />
                        <span>{article.data.score}</span>
                        <FontAwesomeIcon icon={faArrowDown} color="darkgray" />
                    </div>
                    <div className="byline">
                        <p>Posted by <span className="author">{article.data.author}</span></p>
                        <p>r/{article.data.subreddit}</p>
                        <p>{timeSince}</p>
                    </div>
                </div>
            </div>
            <div className="body">
                {content}
            </div>
            <CommentList comments={comments}/>
        </article>
    )
}
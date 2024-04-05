import React from "react";
import { useSelector } from "react-redux";

import './CommentList.css';

import Comment from "../../components/comment/Comment";

export default function CommentList({comments}) {

    if (comments.length < 1) {
        return <section className="comments"><h4 className="comments-title">Comments</h4><p className="comment">Loading Comments...</p></section>
    }

    return (
        <section className="comments">
            <h4 className="comments-title">Comments</h4>
            {comments.map(comment => comment.kind !== 'more' ? <Comment comment={comment.data}/> : "")}
        </section>
    )
}
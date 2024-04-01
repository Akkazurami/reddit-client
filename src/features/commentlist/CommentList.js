import React from "react";
import { useSelector } from "react-redux";

import './CommentList.css';

import Comment from "../../components/comment/Comment";

import { selectComments } from "./commentsSlice";

export default function CommentList() {
    const comments = useSelector(selectComments);

    return (
        <section className="comments">
            <h4 className="comments-title">Comments</h4>
            {comments.map(comment => <Comment comment={comment}/>)}
        </section>
    )
}
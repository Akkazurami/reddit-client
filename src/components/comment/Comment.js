import React from "react";

import './Comment.css';

export default function Comment({comment}) {
    return (
        <comment className="comment">
            <p>{comment.commentText}</p>
        </comment>
    )
}
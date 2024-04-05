import React from "react";

import './Comment.css';

export default function Comment({comment}) {
    const text = comment.body.split('\n')

    return (
        <comment className="comment">
            {text.map(paragraph => <p className="paragraph">{paragraph}</p>)}
            <p className="author">- {comment.author}</p>
        </comment>
    )
}
import React from 'react';

const CommentDetail = ({author, time , message, image}) =>(
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={image} />
        </a>
        <div className="content">
            <a href="/" className="author">
                {author}
            </a>
            <div className="metadata">
                <span className="date">{time}</span>
            </div>
            <div className="text">{message}</div>
        </div>
    </div>
);

export default CommentDetail;
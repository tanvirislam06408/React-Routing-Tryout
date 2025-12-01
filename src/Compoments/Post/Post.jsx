import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div style={{border: '2px solid red', marginBottom: '5px'}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button>
                Details
            </button>
            </Link>
        </div>
    );
};

export default Post;
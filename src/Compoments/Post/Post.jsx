import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigation = useNavigate();
    const handleNavigate = () => {
        navigation(`/posts/${id}`)
    }



    return (
        <div style={{ border: '2px solid red', marginBottom: '5px' }}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
                <button>
                    Details
                </button>
            </Link>
            <button onClick={() => handleNavigate()}>Details2</button>
        </div>
    );
};

export default Post;
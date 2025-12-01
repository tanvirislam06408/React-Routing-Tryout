import React from 'react';
import { Link } from 'react-router';

const UserInfo = ({ use }) => {
    const {id, name, phone, email } = use;
    const styles = {
        border: '5px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={styles}>
            <h1>{name}</h1>
            <h3>Email:{email}</h3>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default UserInfo;
import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const UserInfo = ({ use }) => {
    const [showInfo, setShowInfo] = useState(false);
        
    const { id, name, phone, email } = use;
    const handleActive = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());
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
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide' : 'Show'}info</button>
            {
                showInfo && <Suspense fallback={<span>loading....</span>}>
                    <UserDetails2 handleActive={handleActive}></UserDetails2>
                </Suspense>
            }

        </div>
    );
};

export default UserInfo;
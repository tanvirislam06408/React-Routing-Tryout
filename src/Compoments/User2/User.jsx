import React, { use } from 'react';

const User = ({useData}) => {
    const users = use(useData);
    console.log("useing suspence", users);
    
    return (
        <div>
            <h1>user 2</h1>
        </div>
    );
};

export default User;
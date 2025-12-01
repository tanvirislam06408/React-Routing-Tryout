import React, { use } from 'react';

const UserDetails2 = ({ handleActive }) => {
    const user = use(handleActive);
    const { name } = user;
    return (
        <div>
            <p>Name :  {name}</p>
        </div>
    );
};

export default UserDetails2;
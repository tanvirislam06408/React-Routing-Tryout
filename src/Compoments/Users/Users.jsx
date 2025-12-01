import React from 'react';
import { useLoaderData } from 'react-router';
import UserInfo from '../UserInfo/UserInfo';

const Users = () => {
    const user = useLoaderData();
    console.log(user);
    
    return (
        <div>
           {
            user.map(use => <UserInfo key={use.id} use={use}></UserInfo>)
           }
        </div>
    );
};

export default Users;
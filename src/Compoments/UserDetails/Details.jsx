import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const user = useLoaderData();
    const { website, name } = user;


    return (
        <div>
            <h1>Name:{name}</h1>
            <h3>website: {website}</h3>
        </div>
    );
};

export default Details;
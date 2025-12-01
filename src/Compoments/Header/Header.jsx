import React from 'react';
import { Link } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="Laptops">Laptops</Link>
                <Link to="About">About</Link>
                <Link to="mobile">Mobile</Link>
                <Link to="users">Users</Link>
                <Link to="users2">Users2</Link>
                <Link to="posts">Posts</Link>
                {/* <Link to={`users/${}`}>Details</Link> */}
             
                {/* <a href="/">Home</a><a href="tamim">Laptops</a><a href="About">About</a>
                <a href="mobile">Mobile</a> */}
            </nav>
        </div>
    );
};

export default Header;
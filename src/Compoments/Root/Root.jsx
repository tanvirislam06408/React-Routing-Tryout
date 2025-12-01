import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex '>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;
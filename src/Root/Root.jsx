import React from 'react';
import { Outlet } from 'react-router-dom';
import NabBar from '../Components/NabBar';

const Root = () => {
    return (
        <>
        <div className='container mx-auto'>
            <NabBar></NabBar>
            <Outlet></Outlet>
        </div>
        </>
    );
};

export default Root;
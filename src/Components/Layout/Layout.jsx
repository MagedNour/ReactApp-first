import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <Outlet />
            </div>
            <Footer />

        </>
    );
}

export default Layout;
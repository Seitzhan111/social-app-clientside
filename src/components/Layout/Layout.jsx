import React from 'react';
import {Footer, Header, Sidebar} from "components/index";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main className='container'>
                <Sidebar />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
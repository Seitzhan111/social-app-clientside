import React from 'react';
import {Footer, Header, Sidebar} from "../index";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
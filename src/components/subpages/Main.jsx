import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import BackToTop from '../elements/BackToTop';

const Main = () => {
    return (
        <div>
            {/* Navigation */}
            <Nav />
            
            {/* Content Area */}
            <main className="min-h-screen">
                <Outlet />
                <BackToTop />
            </main>
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;

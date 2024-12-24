import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PeepingEyes from './PeepingEyes';

import '../../assets/css/Common.css';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Navbar */}
            <div className="navbar bg-gray-900 sticky top-0 z-30 bg-opacity-90">
                <PeepingEyes />
                <div className="container mx-auto">
                    <div className="navbar-start flex">
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="btn btn-ghost"
                                aria-label="Toggle Menu">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Logo */}
                        <NavLink
                            to="/"
                            className="btn btn-ghost text-chocolate_light font-extrabold text-3xl whitespace-nowrap relative">
                            $n = 'Faisal Nur';
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                            <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink></li>
                            <li><NavLink to="/worklife" className={({ isActive }) => (isActive ? 'active' : '')}>Work Life</NavLink></li>
                            <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
                            {/* <li><NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink></li> */}
                            <li><NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : '')}>Testimonials</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Call-to-Action Button */}
                    <div className="navbar-end justify-end hidden xl:flex">
                        <NavLink to="/contact" className="btn">Want to hire me?</NavLink>
                    </div>
                </div>
            </div>

            {/* Full-Screen Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 backdrop-blur-sm bg-black/75 transform ${
                    isMenuOpen ? '-translate-x-[50px]' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out flex flex-col items-start pl-0 w-full`}>
                <button
                    onClick={toggleMenu}
                    className="absolute top-3 right-6 text-[#939AA8] text-3xl focus:outline-none"
                    aria-label="Close Menu">
                    &times;
                </button>
                <NavLink
                    to="/"
                    onClick={toggleMenu}
                    className="btn btn-ghost text-chocolate_light text-3xl whitespace-nowrap w-full rounded-none flex justify-center pt-3">
                    $n = 'Faisal Nur';
                </NavLink>
                
                <ul className="text-white text-xl space-y-6 mt-10 ml-20">
                    <li><NavLink to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                    <li><NavLink to="/services" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink></li>
                    <li><NavLink to="/worklife" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Work Life</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
                    {/* <li><NavLink to="/skills" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink></li> */}
                    <li><NavLink to="/testimonials" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Testimonials</NavLink></li>
                    <li><NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
                </ul>

                {/* Hire Me Button */}
                <div className="mt-auto mb-6 pl-20 pr-8 w-full ">
                    <NavLink
                        to="/contact"
                        onClick={toggleMenu}
                        className="btn btn-primary w-full text-center text-white bg-chocolate_light border-0">
                        Want to hire me?
                    </NavLink>
                </div>
            </div>

        </>
    );
};

export default Nav;

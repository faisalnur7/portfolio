import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/subpages/Main';
// Lazy-load components

const About = React.lazy(() => import('./components/pages/About'));
const Services = React.lazy(() => import('./components/pages/Services'));
const Portfolio = React.lazy(() => import('./components/pages/Portfolio'));
const Skills = React.lazy(() => import('./components/pages/Skills'));
const Testimonials = React.lazy(() => import('./components/pages/Testimonials'));
const Contact = React.lazy(() => import('./components/pages/Contact'));
const Hire = React.lazy(() => import('./components/pages/Hire'));
const Home = React.lazy(() => import('./components/pages/Home'));
const WorkLife = React.lazy(() => import('./components/pages/WorkLife'));

const App = () => {
    return (
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
            <Routes>
                {/* Main Layout */}
                <Route path="/" element={<Main />}>
                    {/* Nested Routes */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="worklife" element={<WorkLife />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="testimonials" element={<Testimonials />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="hire" element={<Hire />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;

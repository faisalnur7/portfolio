import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import About from './pages/About';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Hire from './pages/Hire';
import Main from './Main';

const NavigationRouters = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/hire" element={<Hire />} />
            </Routes>
        </Router>
    );
}

export default NavigationRouters;

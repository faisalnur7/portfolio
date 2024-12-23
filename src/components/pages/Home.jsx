import About from "../subpages/About";
import Hero from "../subpages/Hero";
import Marquee from "../subpages/Marquee";
import PortfolioSection from "../subpages/Portfolio";
import Service from "../subpages/Service";
import SkillsSection from "../subpages/Skills";
import TestimonialSection from "../subpages/Testimonials";
import Tools from "../subpages/Tools";
import WorkLife from "../subpages/WorkLife";
import Contact from "../subpages/Contact";
import HireSection from "./Hire";

const Home = () => {
    return(
        <div>
            <Hero />
            <Marquee slidePerViewNumber={4} />
            <About />
            <Tools />
            <Service />
            <WorkLife />
            <PortfolioSection />
            {/* <SkillsSection /> */}
            <TestimonialSection />
            <HireSection />
            <Contact bg_color={'custom_navy'} border={'white'} input_bg_color={'white'} text_color={'white'} />
        </div>
    );
}

export default Home;

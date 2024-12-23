import About from "../subpages/About";
import Contact from "../subpages/Contact";
import Tools from "../subpages/Tools";
import HireSection from "./Hire";

const AboutPage = () => {
    return(
        <div>
            <About />
            <Tools />
            <HireSection />
            <Contact bg_color={'custom_navy'} border={'white'} input_bg_color={'white'} text_color={'white'} />
        </div>
    );
}

export default AboutPage;

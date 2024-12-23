import Testimonials from "../subpages/Testimonials";
import Contact from "../subpages/Contact";
import HireSection from "./Hire";
const TestimonialsPage = () => {
    return(
        <div>
            <Testimonials />
            <HireSection />
            <Contact bg_color={'custom_navy'} border={'white'} input_bg_color={'white'} text_color={'white'} />
        </div>
    );
}

export default TestimonialsPage;

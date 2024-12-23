import Service from "../subpages/Service";
import Contact from "../subpages/Contact";
import HireSection from "./Hire";
const ServicePage = () => {
    return(
        <div>
            <Service />
            <HireSection />
            <Contact bg_color={'custom_navy'} border={'white'} input_bg_color={'white'} text_color={'white'} />
        </div>
    );
}

export default ServicePage;

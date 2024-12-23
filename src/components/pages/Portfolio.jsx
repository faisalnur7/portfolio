import PortfolioSection from "../subpages/Portfolio";
import Contact from "../subpages/Contact";
import HireSection from "./Hire";
const ServicePage = () => {
    return(
        <div>
            <PortfolioSection />
            <HireSection />
            <Contact bg_color={'custom_navy'} border={'white'} input_bg_color={'white'} text_color={'white'} />
        </div>
    );
}

export default ServicePage;

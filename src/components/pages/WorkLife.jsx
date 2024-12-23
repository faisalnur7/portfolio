import WorkLife from "../subpages/WorkLife";
import Contact from "../subpages/Contact";
import HireSection from "./Hire";
const WorkLifePage = () => {
    return(
        <div>
            <WorkLife />
            <HireSection />
            <Contact bg_color={'custom_navy'} border={'white'} input_bg_color={'white'} text_color={'white'} />
        </div>
    );
}

export default WorkLifePage;

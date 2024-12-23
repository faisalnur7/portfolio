import SkillsSection from "../subpages/Skills";
import Contact from "../subpages/Contact";
import HireSection from "./Hire";
const Skills = () => {
    return(
        <div>
            <SkillsSection />
            <HireSection />
            <Contact bg_color={'custom_navy'} border={'white'} input_bg_color={'white'} text_color={'white'} />
        </div>
    );
}

export default Skills;

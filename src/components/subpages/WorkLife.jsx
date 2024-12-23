import "../../assets/css/PhoneMockup.css";
import '../../assets/css/swiperStyle.css';
import Timeline from "./TimeLine";
import SectionHeading from "../elements/SectionHeading";

const WorkLife = () => {
    return (
        <section className="bg-white py-8 px-4 shadow-lg relative">
            <div className="container max-w-screen-xl  lg:mx-auto px-0 lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <SectionHeading 
                    title={'My Career Journey'} 
                    sub_title={"Since 2016, I have worked with several companies, contributing as a developer, team leader, and innovator. My professional journey spans roles in software development, project implementation, and engineering leadership. Over these years, I have honed my expertise in diverse industries, including logistics, transportation, education, and more. With experience in a variety of technologies and frameworks, I have been fortunate to lead and contribute to impactful projects that drive success."} 
                    color={'custom_navy'}
                    sub_color={'custom_navy'} 
                />

                <div className="container mx-auto">
                    <div className="px-auto lg:px-12">
                        <Timeline />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default WorkLife;
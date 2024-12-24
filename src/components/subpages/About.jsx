import TypingAnimation from "./TypingAnimation";
import WhatIDo from "./WhatIDo";
import IconCloud from './IconCloud'
import "../../assets/css/PhoneMockup.css";
import '../../assets/css/swiperStyle.css';
import Clock from "./Clock";
import SectionHeading from "../elements/SectionHeading";
import Marquee from "./Marquee";


const About = () => {

    const slugs = [
        "php",
        "laravel",
        "codeigniter",
        "wordpress",
        "html5",
        "css3",
        "bootstrap",
        "tailwindcss",
        "sass",
        "less",
        "javascript",
        "jquery",
        "typescript",
        "react",
        "vuedotjs",
        "express",
        "nodedotjs",
        "mongodb",
        "mysql",
        "docker",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "linux",
        "git",
        "figma",
        'postman',
        'amazonaws',
      ];

    return (
        <section className="bg-custom_navy py-4 lg:py-8 px-6 lg:px-8">
            <div className="container max-w-screen-xl mx-0 px-0  lg:mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <SectionHeading 
                    title={'About me'} 
                    sub_title={"Hi, I'm Faisal Nur – a passionate full-stack web application developer with over 8 years of experience building innovative, efficient, and scalable solutions. I specialize in creating dynamic web applications and custom solutions tailored to your needs."} 
                    color={'white'}
                    sub_color={'white'} 
                />
                <div className="flex px-0 pt-8 pb-0 lg:mx-6 lg:gap-8 xl:gap-12 lg:pt-0 gap-8 items-start justify-start">
                    <div className="hidden lg:block mr-auto place-self-center lg:col-span-3">
                        <div className="mockup-phone">
                            <div className="display">
                                {/* Status Bar */}
                                <div className="status-bar">
                                <div className="left-section">
                                    <span className="time"><Clock /></span>
                                </div>
                                <div className="right-section">
                                    <span className="icon">📶</span>
                                    <span className="icon">📡</span>
                                    <span className="icon">🔋</span>
                                </div>
                                </div>

                                {/* Punch-Hole Camera */}
                                <div className="punch-hole"></div>

                                {/* App Screen */}
                                <div className="artboard phone-screen">
                                    <div className="icons">
                                        <IconCloud iconSlugs={slugs} />
                                        {/* <Marquee slidePerViewNumber={1} /> */}
                                    </div>

                                    <div className="p-2 h-50">
                                        <p className="text-3xl text-white">I can build for you a </p> <TypingAnimation color={'text-chocolate_light text-2xl'} texts={["Responsive websites", "SEO friendly websites", "Robust Websites"]} />
                                    </div>
                                </div>

                                {/* Gesture Bar */}
                                <div className="gesture-bar"></div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <WhatIDo />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;
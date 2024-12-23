import React, { useState, useEffect, useRef } from "react";
import SectionHeading from "../elements/SectionHeading";

const skillsData = [
  { title: "HTML", proficiency: 9 },
  { title: "CSS", proficiency: 8 },
  { title: "TailwindCSS", proficiency: 8 },
  { title: "JavaScript", proficiency: 8 },
  { title: "ReactJS", proficiency: 7 },
  { title: "Laravel", proficiency: 8 },
  { title: "WordPress", proficiency: 7 },
  { title: "Database", proficiency: 8 },
  { title: "DevOps", proficiency: 6 },
];

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-white" id="skills" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <SectionHeading 
            title={'My Skills'} 
            sub_title={"Explore my diverse skill set, encompassing expertise in modern web development technologies. From crafting robust backends with PHP and Laravel to building dynamic user interfaces with ReactJS and TailwindCSS, I specialize in creating seamless, scalable, and efficient solutions. My commitment to continuous learning ensures I'm always equipped to tackle new challenges and innovate with cutting-edge tools."} 
            color={'custom_navy'}
            sub_color={'custom_navy'} 
        />

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-custom_navy border-2 shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300"
            >
              {/* Skill Title */}
              <h3 className="text-lg font-bold text-white mb-4 text-center">
                {skill.title}
              </h3>

              {/* Proficiency Bar */}
              <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"
                  style={{
                    width: `${visible ? skill.proficiency * 10 : 0}%`,
                    transition: "width 1.5s ease",
                  }}
                ></div>
              </div>

              {/* Proficiency Text */}
              <p className="text-center text-sm font-semibold text-white mt-2">
                {visible ? `${skill.proficiency} / 10` : "0 / 10"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

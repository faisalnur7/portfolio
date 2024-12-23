import React from 'react';
import ProjectCard from './ProjectCard'; 
import SectionHeading from "../elements/SectionHeading";

const projects = [
  {
    name: "Secqrd",
    description: "I developed the website for Secqrd, a digital after-sales platform that connects merchants with buyers, offering features like warranty management, e-registration, support ticketing, returns and refunds processing, and e-voucher redemption. The site provides a user-friendly, responsive interface, streamlining after-sales services and enhancing the buyer experience.",
    image: "../src/assets/img/projects/secqrd.png",
    link: "https://secqrd.app/",
    techStack: ["Laravel", "Bootstrap", "jQuery"]
  },
  {
    name: "UKDrills",
    description: "I developed the e-commerce website for UK Drills, a family-owned business in Wigan, UK, specializing in high-quality drill bits and accessories. The platform features a comprehensive product catalog, intuitive navigation, secure online shopping, and a responsive design, ensuring a seamless user experience. With over 1,000,000 drill bits in stock and nationwide same-day dispatch, the site effectively highlights the company's commitment to quality and customer satisfaction.",
    image: "../src/assets/img/projects/ukdrills.png",
    link: "https://www.ukdrills.com/",
    techStack: ["Magento 2", "PHP", "jQuery", "XML"]
  },
  {
    name: "Adjustamatic",
    description: "I developed the website for Adjustamatic, a UK-based company with over 50 years of experience in crafting bespoke adjustable beds and riser recliner chairs. The website showcases their range of products designed to provide comfort and therapeutic support, aiding conditions such as arthritis and sciatica. It features detailed product information, customer testimonials, and resources to assist users in selecting the right products for their needs. The site is designed to be user-friendly and responsive, ensuring accessibility across various devices. ",
    image: "../src/assets/img/projects/adjustamatic.png",
    link: "https://www.adjustamatic.co.uk/",
    techStack: ["Wordpress", "jQuery","HTML","CSS"]
  },
  {
    name: "Childrens Hope",
    description: "I developed the web application for Children's Hope, a platform dedicated to supporting children and their families during times of crisis. The application facilitates assistance programs, allowing users to apply for support and access resources aimed at providing healthy beginnings and growth opportunities. Designed with a user-friendly interface and responsive layout, the platform ensures accessibility across various devices, enhancing the organization's ability to connect with and assist those in need.",
    image: "../src/assets/img/projects/childrens_hope.png",
    link: "https://app.childrens-hope.org/",
    techStack: ["Laravel", "jQuery","HTML","CSS", "Bootstarp"]
  },
  {
    name: "Conversion Uplift",
    description: "I developed the website for Conversion Uplift, a UK-based agency focused on strategic digital analytics and conversion rate optimization (CRO). The site highlights their services, including web analytics audits, A/B testing frameworks, and user research, while ensuring an intuitive and user-friendly experience. Designed with a responsive layout, the website effectively showcases their expertise in tools like Google Analytics, BigQuery, and Google Tag Manager, aiming to drive business growth through optimized online conversions.",
    image: "../src/assets/img/projects/conversion_uplift.png",
    link: "https://conversion-uplift.co.uk/",
    techStack: ["Wordpress", "jQuery","HTML","CSS"]
  },
  {
    name: "Ethio Test Prep System",
    description: "Ethio Testprep System is the only resource that prepares students for both college admissions and national exam testprep system in one combined platform. It seamlessly merges the roles of a college advisor, test prep tutor, career resource center, college application specialist, essay guidance expert, and application notification system. Experience the advantage of the Ethio Testprep System, your key to a bright academic future.",
    image: "../src/assets/img/projects/secqrd.png",
    link: "https://ethiotestprep.com/",
    techStack: ["Laravel", "jQuery","HTML","CSS", "Bootstarp"]
  }
];

const PortfolioSection = () => {
  return (
    <section className="bg-custom_navy py-8 shadow-lg px-8">
      <div className="container max-w-screen-xl  lg:mx-auto px-0 lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <SectionHeading 
            title={'My Portfolio'} 
            sub_title={"Welcome to my portfolio section, where creativity meets functionality. Here, you'll discover a showcase of my finest work, from dynamic web applications to visually engaging designs. Each project reflects my expertise, attention to detail, and passion for delivering impactful solutions."} 
            color={'white'}
            sub_color={'white'} 
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    name={project.name}
                    image={project.image}
                    techStack={project.techStack}
                    description={project.description}
                    link={project.link}
                />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

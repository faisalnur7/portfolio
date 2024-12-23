import ServiceCard from "./ServiceCard";
import SectionHeading from "../elements/SectionHeading";

const Service = () => {
  const services = [
    {
      title: "Backend Development",
      description:
        "Building secure and scalable server-side applications with Laravel and CodeIgniter, focusing on APIs, database management, and performance optimization.",
      imageSrc: "../src/assets/img/backend.png",
    },
    {
      title: "Frontend Development",
      description:
        "Crafting modern, responsive UIs using ReactJS, VueJS, and TailwindCSS for seamless user experiences across devices.",
      imageSrc: "../src/assets/img/frontend.png",
    },
    {
      title: "WordPress Solutions",
      description:
        "Creating custom themes and plugins to build optimized, user-friendly WordPress websites tailored to your needs.",
      imageSrc: "../src/assets/img/wordpress_solution.png",
    },
    {
      title: "DevOps & Server Management",
      description:
        "Streamlining deployments with Docker, Linux system administration, and server optimization for high performance.",
      imageSrc: "../src/assets/img/devops.png",
    },
    {
      title: "eCommerce Solutions",
      description:
        "Building multivendor eCommerce platforms with secure payment integration and role-based management.",
      imageSrc: "../src/assets/img/ecommerce.png",
    },
    {
      title: "Custom Web Applications",
      description:
        "Designing scalable and complex web apps like ERP, POS, and fintech solutions to solve business challenges.",
      imageSrc: "../src/assets/img/custom_web_application.png",
    },
    {
      title: "API Development & Integration",
      description:
        "Developing RESTful APIs and integrating third-party services like payment gateways and CRMs.",
      imageSrc: "../src/assets/img/api.png",
    },
    {
      title: "A/B Testing & Optimization",
      description:
        "Enhancing user experiences and conversions through strategic A/B testing with tools like VWO, Optimizely, and Google Optimize.",
      imageSrc: "../src/assets/img/ab_testing.png",
    },
    {
      title: "Performance Optimization",
      description:
        "Improving site speed and scalability by optimizing code, queries, and server configurations.",
      imageSrc: "../src/assets/img/performance.png",
    },
    {
      title: "Figma to HTML",
      description:
        "Transforming Figma designs into pixel-perfect, responsive HTML/CSS code, ensuring a seamless transition from design to development.",
      imageSrc: "../src/assets/img/figma_to_html.png",
    }
  ];
  
      
    
      return (
        <section className="bg-custom_navy shadow-lg py-0 lg:py-8 px-0 lg:px-8">
            <div className="container max-w-screen-xl mx-auto px-6 lg:mx-auto gap-8 xl:gap-0 ">
                <SectionHeading 
                    title={'Serivces that I can provide'} 
                    color={'white'} 
                />
                <div className="container mx-auto">
                    <div className=" w-full gap-4 grid-cols-2 lg:grid md:grid-cols-2 lg:gap-12">
                    {services.map((service, index) => (
                        <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        imageSrc={service.imageSrc}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>
      );
}

export default Service;
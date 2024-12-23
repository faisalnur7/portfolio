import React from "react";

const WhatIDo = () => {
  // Data stored as JSON
  const services = [
    {
      title: "Backend Development",
      description:
        "Building secure and scalable server-side applications with Laravel and CodeIgniter, focusing on APIs, database management, and performance optimization.",
    },
    {
      title: "Frontend Development",
      description:
        "Crafting modern, responsive UIs using ReactJS, VueJS, and TailwindCSS for seamless user experiences across devices.",
    },
    {
      title: "WordPress Solutions",
      description:
        "Creating custom themes and plugins to build optimized, user-friendly WordPress websites tailored to your needs.",
    },
    {
      title: "DevOps & Server Management",
      description:
        "Streamlining deployments with Docker, Linux system administration, and server optimization for high performance.",
    },
    {
      title: "eCommerce Solutions",
      description:
        "Building multivendor eCommerce platforms with secure payment integration and role-based management.",
    },
    {
      title: "Custom Web Applications",
      description:
        "Designing scalable and complex web apps like ERP, POS, and fintech solutions to solve business challenges.",
    },
    {
      title: "API Development & Integration",
      description:
        "Developing RESTful APIs and integrating third-party services like payment gateways and CRMs.",
    },
  ];

  return (
    <ul className="pt-0 lg:pt-4 text-slate-300 flex flex-col gap-0">
      {services.map((service, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg lg:text-xl font-semibold mb-1 text-white">{service.title}</h2>
          <p className="text-slate-400 text-lg lg:text-xl">{service.description}</p>
        </div>
      ))}
    </ul>
  );
};

export default WhatIDo;

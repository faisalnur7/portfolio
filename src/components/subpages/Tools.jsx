import React from "react";
import Bounce from "./Bounce";
import "../../assets/css/Bounce.css";

import SectionHeading from "../elements/SectionHeading";

// Updated tech stack with all icons
const toolsData = [
  { icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg", name: "PHP" },
  { icon: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg", name: "Laravel" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg", name: "CodeIgniter" },
  { icon: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg", name: "WordPress" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", name: "CSS3" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", name: "Bootstrap" },
  { icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", name: "Tailwind CSS" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", name: "Sass" },
  { icon: "https://www.vectorlogo.zone/logos/lesscss/lesscss-icon.svg", name: "Less" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
  { icon: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg", name: "jQuery" },
  { icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", name: "React" },
  { icon: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg", name: "VueJS" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", name: "Express" },
  { icon: "https://www.vectorlogo.zone/logos/axios/axios-icon.svg", name: "Axios" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", name: "NodeJS" },
  { icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", name: "MongoDB" },
  { icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", name: "MySQL" },
  { icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg", name: "Docker" },
  { icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg", name: "Jira" },
  { icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", name: "Git" },
  { icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg", name: "GitHub" },
  { icon: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg", name: "GitLab" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code" },
  { icon: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg", name: "Linux" },
  { icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", name: "Figma" },
  { icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", name: "Postman" },
  { icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg", name: "AWS" },
  { icon: "https://www.vectorlogo.zone/logos/browserstack/browserstack-icon.svg", name: "BrowserStack" },
  
];

const Tools = () => {
  return (
    <section className="bg-white dark:bg-white py-2 shadow-lg z-10 relative px-8">
      <div className="container max-w-screen-xl px-0 pt-8 pb-0 lg:mx-auto lg:gap-4 xl:gap-0 lg:pt-8 lg:grid-cols-12">
        <SectionHeading 
            title={'My Tech Stack & Tools'} 
            sub_title={'My tech stack is a blend of modern frameworks and tools tailored to build robust, scalable, and efficient solutions. From frontend libraries like ReactJS and VueJS to backend frameworks such as Laravel and CodeIgniter, I craft seamless applications. Equipped with tools like Docker, TailwindCSS, and MySQL, I ensure development is optimized for performance and user experience.'}
            color={'custom_navy'} 
            sub_color={'custom_navy'} 
        />
        <div className="grid grid-cols-5 mt-0 mb-6 justify-center gap-2 lg:gap-6">
          {toolsData.map((tool, index) => (
            <Bounce
              key={index}
              className="py-2 px-2 lg:px-4 bg-transparent shadow-lg rounded-lg flex items-center cursor-pointer transition-transform hover:scale-110 flex-col justify-center gap-4 lg:flex-row"
            >
              <img
                alt={`${tool.name} Icon`}
                src={tool.icon}
                className="w-12 h-12"
              />
              <h4 className="text-md pl-0 lg:pl-4 text-custom_navy font-medium hidden md:block">
                {tool.name}
              </h4>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

import React from 'react';

const ProjectCard = ({ name, image, techStack, description, link }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt="Project Thumbnail" className="w-full h-54 object-left-top" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <div className="mb-4">
          {techStack.map((tech, techIndex) => (
            <span key={techIndex} className="inline-block bg-blue-600 text-white text-xs font-semibold mr-2 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-400 hover:text-blue-600 font-semibold transition">
          View Project &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

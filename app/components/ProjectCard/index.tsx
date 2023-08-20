import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ name, preview, description, link, github}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={preview} alt={name} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex space-x-4">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Project
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                GitHub
                </a>
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;
import React from 'react';

const ProjectCard = ({ title, description, imageSrc, githubLink, demoLink }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
            <img src={imageSrc} alt={title} className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">GitHub</a>
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Demo</a>
            </div>
        </div>
    );
}

export default ProjectCard;

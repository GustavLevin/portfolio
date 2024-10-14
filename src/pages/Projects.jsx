import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Gotlands Quiz', description: 'A quiz about Gotland', link: 'https://gustavlevin.github.io/Quiz-projekt/' },
    { title: 'Item-App', description: 'Focus on Backend', link: 'https://github.com/GustavLevin/itemApp' },
    { title: 'Habits & Todos', description: 'Agile Project', link: 'https://github.com/GustavLevin/Agilt-Projekt-Gustavx2-Gabriel' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:text-blue-200 hover:underline transition duration-200">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
import React from 'react';
import { FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa'; 

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-lg uppercase tracking-widest text-gray-700">Front End Developer</h2>
      <h1 className="text-6xl font-bold tracking-tight mt-2 mb-10 text-white">Gustav Levin</h1>
      
      <div className="flex space-x-8">
        <a href="https://github.com/GustavLevin" className="flex flex-col items-center text-white hover:text-gray-300">
          <FaGithub size={40} />
          <span className="mt-2">GitHub</span>
        </a>
        <a href="/portfolio/CV.pdf" className="flex flex-col items-center text-white hover:text-gray-300">
          <FaFileAlt size={40} />
          <span className="mt-2">CV</span>
        </a>
        <a href="mailto:gustav_levin@hotmail.com" className="flex flex-col items-center text-white hover:text-gray-300">
          <FaEnvelope size={40} />
          <span className="mt-2">Contact me</span>
        </a>
      </div>
    </div>
  );
};

export default Home;

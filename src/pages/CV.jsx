import React from 'react';

const CV = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl font-bold text-white mb-8">My CV</h2>
      <p className="text-white mb-4">Here is a summary of my experience and skills. You can also download the full version below.</p>

     
      <div className="flex justify-center mb-8">
        <img 
          src="/portfolio/CV.png" 
          alt="My CV"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5"
        />
      </div>

      
      <div className="text-center">
        <a 
          href="/portfolio/CV.pdf"
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default CV;
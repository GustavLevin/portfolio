import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Gustav's Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/cv" className="hover:underline">CV</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
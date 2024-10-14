import React from 'react';

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-400 hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      {text}
    </a>
  );
};

export default Button;
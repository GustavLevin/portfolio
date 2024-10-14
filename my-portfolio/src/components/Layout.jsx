import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col moving-background"> 
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
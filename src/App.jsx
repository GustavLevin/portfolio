import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import './App.css'; 

function App() {
  return (
<Router basename="/portfolio">
  <Routes>
    <Route path="/" element={<Layout><Home /></Layout>} />
    <Route path="/projects" element={<Layout><Projects /></Layout>} />
    <Route path="/cv" element={<Layout><CV /></Layout>} />
  </Routes>
</Router>


  );
}

export default App;
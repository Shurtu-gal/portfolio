import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, About, Projects, ContactMe, Blog } from './pages';

let darkMode = createContext('true', () => {});

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode((curr) => !curr);
  };

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('*'));
    nodes.forEach((node) => node.classList.toggle('change'));
  }, [isDarkMode]);

  return (
    <Router>
      <darkMode.Provider value={{ isDarkMode, handleToggle }}>
        <NavBar />
      </darkMode.Provider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </Router>
  );
};

export { darkMode };
export default App;

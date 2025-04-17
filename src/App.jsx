import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // includes Popper
import './App.css'
import React from "react";
import NavBar from './components/NavBar'
import HeroBanner from './components/HeroBanner'
import Personal from './components/Personal'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import SkillSet from './components/SkillSet'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { createContext,useState } from 'react';




export const ThemeContext =createContext(null);

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  React.useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  
  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <NavBar />
          <HeroBanner />
          <Personal />
          <Certificates />
          <Projects />
          <SkillSet />
          <Contacts />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}



export default App

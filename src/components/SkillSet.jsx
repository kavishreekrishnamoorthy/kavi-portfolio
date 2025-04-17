import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { FaGithub, FaCss3 ,FaGitAlt ,FaReact ,FaHtml5,FaJava,FaPython,FaFigma,FaNpm,FaBootstrap,FaNodeJs} from "react-icons/fa";
import { SiMongodb,SiVite ,SiCanva ,SiAdobephotoshop } from "react-icons/si";
import { DiJavascript, } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp,TbBrandGithubCopilot } from "react-icons/tb";

const SkillSet = () => {
  const items = [
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <FaHtml5 /> , label: "Html5" },
    { icon: <FaCss3 /> , label: "CSS3" },
    { icon: <DiJavascript /> , label: "Javascript" },
    { icon: <FaReact />, label: "React" },
    { icon: <FaNodeJs /> , label: "Node.Js" },
    { icon: <FaBootstrap /> , label: "Bootstrap" },
    { icon: <SiVite /> , label: "Vite" },
    { icon: <TbBrandCpp /> , label: "C/C++" },
    { icon: <FaJava /> , label: "Java"},
    { icon: <FaPython /> , label: "Python" },
    { icon: <FaNpm />, label: "Npm" },
    { icon: <SiMongodb /> , label: "Mongodb" },
    { icon: <SiCanva /> , label: "Canva" },
    { icon: <VscVscode />, label: "VS Code" },
    { icon: <FaFigma/> , label: "Figma" },
    { icon: <TbBrandGithubCopilot /> ,label:"Githubcopilot" },
    { icon: <FaGitAlt />, label: "Git " },
  ];

  return (
    <div className='container'>
    <div className="py-4 " id='SoftSkills'>
        <h3 className='text-center h1 fw-bold'>Soft Skills</h3>
      <div className="softSkill row row-cols-2 g-3 py-5">
        {items.map((item, index) => (
          <div key={index} className="skillSet col-md-2 col-sm-1">
            <div className="skillset-icon card text-center p-3 shadow">
              <div className="icon-dark display-3 text-black mb-2">{item.icon}</div>
              <div className="h5">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <hr />
    </div>
  );
};

export default SkillSet;

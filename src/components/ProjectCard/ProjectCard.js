import React, { useContext } from 'react';
import './ProjectCard.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Icono para el enlace

const ProjectCard = ({ project }) => {
  const { getUIText, currentLang } = useContext(LanguageContext);

  // Obtener el título y descripción en el idioma actual
  const title = project.title[currentLang] || project.title.es;
  const description = project.description[currentLang] || project.description.es;
  const buttonText = getUIText('viewDemoButton', 'Ver Demo');

  return (
    <div className="project-card">
      <div className="project-card-image-container">
        <img src={project.image} alt={title} className="project-card-image" />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="project-card-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        <a 
          href={project.demoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card-button"
        >
          {buttonText} <FaExternalLinkAlt size="0.8em" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
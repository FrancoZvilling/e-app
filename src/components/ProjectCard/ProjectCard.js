import React, { useContext } from 'react';
import './ProjectCard.css';
import { LanguageContext } from '../../contexts/LanguageContext'; // Asegúrate que la ruta sea correcta
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  // Asumiendo que LanguageContext está configurado y funciona.
  const context = useContext(LanguageContext);
  const currentLang = context ? context.currentLang : 'es'; // Fallback a 'es'
  const getUIText = context ? context.getUIText : (key, fallback) => fallback; // Fallback para getUIText

  // Obtener el título y descripción en el idioma actual
  const title = project.title[currentLang] || project.title.es; // Fallback a 'es' si el idioma no está en el objeto
  const description = project.description[currentLang] || project.description.es; // Fallback a 'es'
  const buttonText = getUIText('viewDemoButton', 'Ver Demo');

  return (
    <div className="project-card">
      <div className="project-card-image-container">
        <img src={project.image} alt={title} className="project-card-image" />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {/* La sección de tecnologías ha sido eliminada */}
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
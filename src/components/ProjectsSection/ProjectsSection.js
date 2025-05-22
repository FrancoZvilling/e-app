import React, { useContext } from 'react';
import './ProjectsSection.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsData } from '../../data/projectsData'; // Asumiendo que creas este archivo
import { LanguageContext } from '../../contexts/LanguageContext';

// Si no quieres crear 'projectsData.js' aun, puedes pegar el array aquí:
// const projectsData = [ /* ... tus datos de proyecto ... */ ];

const ProjectsSection = ({ id }) => {
  const { getUIText } = useContext(LanguageContext);
  const sectionTitle = getUIText('projectsSectionTitle', 'Nuestros Proyectos');

  return (
    <section id={id} className="projects-section">
      <div className="container"> {/* Un contenedor para centrar y limitar el ancho */}
        <h2 className="section-title projects-section-title">{sectionTitle}</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
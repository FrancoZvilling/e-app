import React, { useContext } from 'react';
import './ProcessSection.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaComments, FaCodeBranch, FaClipboardList, FaRocket, FaShoppingCart } from 'react-icons/fa'; // Iconos para los pasos

// Datos de los pasos del proceso (podrían ir en un archivo separado si crecen mucho)
const processStepsData = {
  es: [
    {
      icon: <FaComments />,
      title: "1. Charla y Diseño Inicial",
      description: "Comenzamos con una charla para entender tus ideas y lo que necesitas (hotel, tienda, restaurante, etc.). Juntos, definimos el estilo, colores y funciones especiales (modo oscuro, multi-idioma, carrito)."
    },
    {
      icon: <FaCodeBranch />, // Icono que puede representar la infraestructura/código
      title: "2. Tu Espacio Digital Personalizado",
      description: "Preparamos tu 'almacén' seguro en la nube (GitHub) para el código de tu web y configuramos dónde vivirá tu página (Netlify) para que todos la visiten, ¡todo conectado para actualizaciones fáciles!"
    },
    {
      icon: <FaClipboardList />,
      title: "3. Propuesta Clara y Tiempos",
      description: "Con todos los detalles, te presentamos una propuesta clara con el presupuesto y una estimación del tiempo para construir tu sitio web soñado."
    },
    {
      icon: <FaRocket />, // Usaremos FaRocket para "Manos a la obra" o "Desarrollo"
      title: "4. ¡Manos a la Obra! Creamos tu Web",
      description: "Nuestro equipo transforma el diseño en una página web real, funcional, atractiva y optimizada para todos los dispositivos, ¡lista para impresionar!"
    },
    {
      icon: <FaShoppingCart />, // Icono que puede representar la carga final/producto listo
      title: "5. Carga Final y ¡Lanzamiento!",
      description: "Incorporamos tus productos, fotos y textos. Hacemos una revisión final contigo, ¡y tu nueva página web está lista para brillar online!"
    }
  ],
  en: [
    {
      icon: <FaComments />,
      title: "1. Initial Chat & Design",
      description: "We start with a conversation to understand your ideas and needs (hotel, store, restaurant, etc.). Together, we define the style, colors, and special features (dark mode, multi-language, cart)."
    },
    {
      icon: <FaCodeBranch />,
      title: "2. Your Personalized Digital Space",
      description: "We set up your secure cloud 'warehouse' (GitHub) for your website's code and configure where your page will live (Netlify) for everyone to visit, all connected for easy updates!"
    },
    {
      icon: <FaClipboardList />,
      title: "3. Clear Proposal & Timeline",
      description: "With all details ironed out, we present a clear proposal with the budget and a time estimate to build your dream website."
    },
    {
      icon: <FaRocket />,
      title: "4. Let's Get to Work! We Build Your Web",
      description: "Our team transforms the design into a real, functional, attractive, and device-optimized website, ready to impress!"
    },
    {
      icon: <FaShoppingCart />,
      title: "5. Final Content & Launch!",
      description: "We incorporate your products, photos, and texts. We do a final review with you, and your new website is ready to shine online!"
    }
  ]
};


const ProcessSection = ({ id }) => {
  const { getUIText, currentLang } = useContext(LanguageContext);

  const sectionTitle = getUIText('processSectionTitle', 'Nuestro Proceso Simplificado');
  const steps = processStepsData[currentLang] || processStepsData.es;

  return (
    <section id={id} className="process-section">
      <div className="container">
        <h2 className="section-title process-section-title">{sectionTitle}</h2>
        <div className="process-steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step-card">
              <div className="process-step-icon-container">
                {step.icon}
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
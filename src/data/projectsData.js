// src/data/projectsData.js
import zapaImage from '../assets/images/projects/tienda-ropa.png' // Asumo que esta imagen ahora representa "Tienda online"
import hotelImage from '../assets/images/projects/hotel.png' // Para "Pagina web de hoteleria"
import cartaWeb from '../assets/images/projects/cartaweb.webp' // Asumo que esta imagen ahora representa "Carta QR para local"
import cartaWebDel from '../assets/images/projects/cartawebdelivery.webp' // Para "Carta QR + delivery"
import library from '../assets/images/projects/library.png' // Para "Web para libreria"
import portfolio from '../assets/images/projects/portfolio.png' // Para "Portafolio personal"


// Tecnologías comunes a todos los proyectos
const commonTechnologies = ["HTML", "CSS", "JavaScript", "React.js"];

export const projectsData = [
  {
    id: 1,
    title: {
      es: "Tienda online para emprendimientos", // Cambiado
      en: "Online Store for Entrepreneurs",     // Cambiado
    },
    description: {
      // Cambiado y expandido
      es: "E-commerce completo adaptable a diversos rubros como ropa, joyería, cosmética, y más. Incluye carrito y gestión de productos.",
      en: "Complete e-commerce solution adaptable to various niches like clothing, jewelry, cosmetics, and more. Includes cart and product management.",
    },
    image: zapaImage,
    demoUrl: "https://tiendaropa-e-app.netlify.app/", // Actualiza si es necesario
    technologies: [...commonTechnologies, "Node.js", "Stripe"], // Añadido commonTech, puedes ajustar las específicas
  },
  {
    id: 2,
    title: {
      es: "Carta QR para local de comida/restaurante", // Cambiado
      en: "QR Menu for Food Venues/Restaurants",   // Cambiado
    },
    description: {
      // Cambiado
      es: "Menú digital interactivo accesible mediante código QR. Ideal para que tus clientes vean tus platos de forma moderna y fácil.",
      en: "Interactive digital menu accessible via QR code. Ideal for customers to view your dishes in a modern and easy way.",
    },
    image: cartaWeb,
    demoUrl: "https://cartawebrestaurant.netlify.app/", // Actualiza si es necesario
    technologies: [...commonTechnologies, "Firebase"], // Añadido commonTech
  },
  {
    id: 3,
    title: {
      es: "Página web de hotelería", // Cambiado
      en: "Hotel Website",            // Cambiado
    },
    description: {
      // Mantenida y adaptada ligeramente
      es: "Solución web para hoteles y alojamientos. Muestra tus instalaciones, servicios y permite a los huéspedes conocerte mejor.",
      en: "Web solution for hotels and accommodations. Showcase your facilities, services, and let guests get to know you better.",
    },
    image: hotelImage,
    demoUrl: "https://demo-hotel-eapp.netlify.app/", // Actualiza si es necesario
    technologies: [...commonTechnologies, "API Reservas (ej.)"], // Añadido commonTech, puedes ajustar
  },
  {
    id: 4,
    title: {
      es: "Carta QR para Restaurante + delivery", // Cambiado
      en: "QR Menu for Restaurant + Delivery",   // Cambiado
    },
    description: {
      // Mantenida y adaptada ligeramente
      es: "Menú digital optimizado para pedidos en mesa y servicio de delivery. Facilita la gestión y la experiencia del cliente.",
      en: "Digital menu optimized for table orders and delivery service. Streamlines management and customer experience.",
    },
    image: cartaWebDel,
    demoUrl: "https://cartawebdelivery.netlify.app/", // Actualiza si es necesario
    technologies: [...commonTechnologies, "Integración WhatsApp (ej.)"], // Añadido commonTech
  },
  {
    id: 5,
    title: {
      es: "Web para librería", // Cambiado
      en: "Bookstore Website", // Cambiado
    },
    description: {
      // Cambiado
      es: "Plataforma online para exhibir y vender libros. Catálogo interactivo, búsqueda y detalles de cada publicación.",
      en: "Online platform to display and sell books. Interactive catalog, search, and details for each publication.",
    },
    image: library,
    demoUrl: "https://libreriaonlinezwilling.netlify.app/", // Actualiza si es necesario
    technologies: [...commonTechnologies, "Gestión de Catálogo"], // Añadido commonTech
  },
  {
    id: 6,
    title: {
      es: "Portafolio personal para mostrar tus trabajos", // Cambiado
      en: "Personal Portfolio to Showcase Your Work",   // Cambiado
    },
    description: {
      // Cambiado y expandido
      es: "Diseño elegante y profesional para presentar tus proyectos y habilidades. Ideal para fotógrafos, diseñadores, psicólogos, y más.",
      en: "Elegant and professional design to present your projects and skills. Ideal for photographers, designers, psychologists, and more.",
    },
    image: portfolio,
    demoUrl: "https://resilient-klepon-74784a.netlify.app/", // Actualiza si es necesario
    technologies: [...commonTechnologies], // Añadido commonTech
  },
];
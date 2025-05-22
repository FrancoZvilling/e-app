import React, { useState, useContext } from 'react';
import './ContactSection.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

// Reemplaza con tu número de WhatsApp (con código de país, sin '+' ni espacios)
const MY_WHATSAPP_NUMBER = "543541315119"; // <<--- ASEGÚRATE QUE ESTE ES TU NÚMERO CORRECTO
// Reemplaza con tu dirección de correo electrónico
const MY_EMAIL_ADDRESS = "francozvilling-programador@hotmail.com"; // Ya tenías tu email aquí, lo mantengo

const ContactSection = ({ id }) => {
  const { getUIText } = useContext(LanguageContext); // Removí currentLang ya que no se usa directamente aquí

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: '',
    senderEmail: '',
  });
  const [showEmailField, setShowEmailField] = useState(false);
  const [errors, setErrors] = useState({});

  const sectionTitle = getUIText('contactSectionTitle', 'Ponte en Contacto');
  const introText = getUIText('contactIntro', '¿Tienes una idea o necesitas una cotización? ¡Escríbenos!');
  const firstNameLabel = getUIText('firstNameLabel', 'Nombre');
  const lastNameLabel = getUIText('lastNameLabel', 'Apellido');
  const messageLabel = getUIText('messageLabel', 'Tu Mensaje');
  const senderEmailLabel = getUIText('senderEmailLabel', 'Tu Email (para responderte)');
  const sendWhatsAppButton = getUIText('sendWhatsAppButton', 'Enviar por WhatsApp');
  const sendEmailButton = getUIText('sendEmailButton', 'Enviar por Email');
  const submitEmailButton = getUIText('submitEmailButton', 'Confirmar y Enviar Email'); // Cambiado para reflejar acción de abrir cliente de email
  const requiredFieldText = getUIText('requiredFieldText', 'Este campo es requerido');
  const invalidEmailText = getUIText('invalidEmailText', 'Email inválido');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = (isEmailSubmission = false) => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = requiredFieldText;
    if (!formData.lastName.trim()) newErrors.lastName = requiredFieldText;
    if (!formData.message.trim()) newErrors.message = requiredFieldText;

    if (isEmailSubmission) {
      if (!formData.senderEmail.trim()) {
        newErrors.senderEmail = requiredFieldText;
      } else if (!/\S+@\S+\.\S+/.test(formData.senderEmail)) {
        newErrors.senderEmail = invalidEmailText;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const text = `¡Hola! Soy ${formData.firstName} ${formData.lastName}.\n\nMi consulta es:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    // Usamos la constante MY_WHATSAPP_NUMBER
    const whatsappUrl = `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailOptionClick = () => {
    setShowEmailField(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateForm(true)) return;

    // Usamos getUIText para el asunto del email, asegurando que proviene del contexto
    const subject = encodeURIComponent(getUIText('emailSubjectContactForm', `Consulta Web de ${formData.firstName} ${formData.lastName}`));
    const body = `Nombre: ${formData.firstName} ${formData.lastName}\nEmail del remitente: ${formData.senderEmail}\n\nMensaje:\n${formData.message}`;
    const encodedBody = encodeURIComponent(body);
    const mailtoUrl = `mailto:${MY_EMAIL_ADDRESS}?subject=${subject}&body=${encodedBody}`;
    window.location.href = mailtoUrl;
    
    // setFormData({ firstName: '', lastName: '', message: '', senderEmail: '' });
    // setShowEmailField(false);
  };


  return (
    <section id={id} className="contact-section">
      <div className="container">
        <h2 className="section-title contact-section-title">{sectionTitle}</h2>
        <p className="contact-intro-text">{introText}</p>

        <form className="contact-form" noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">{firstNameLabel}</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">{lastNameLabel}</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">{messageLabel}</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          {showEmailField && (
            <div className="form-group sender-email-group animate-fade-in">
              <label htmlFor="senderEmail">{senderEmailLabel}</label>
              <input 
                type="email" 
                id="senderEmail" 
                name="senderEmail" 
                value={formData.senderEmail} 
                onChange={handleChange} 
                required 
              />
              {errors.senderEmail && <span className="error-message">{errors.senderEmail}</span>}
            </div>
          )}

          <div className="form-actions">
            {!showEmailField ? (
              <>
                <button type="button" className="contact-button whatsapp" onClick={handleWhatsAppSubmit}>
                  <FaWhatsapp /> {sendWhatsAppButton}
                </button>
                <button type="button" className="contact-button email-option" onClick={handleEmailOptionClick}>
                  <FaEnvelope /> {sendEmailButton}
                </button>
              </>
            ) : (
              <button type="submit" className="contact-button email-submit animate-fade-in" onClick={handleEmailSubmit}>
                <FaPaperPlane /> {submitEmailButton}
              </button>
            )}
          </div>
        </form>
        
        <div className="direct-contact-info">
            <p>{getUIText('contactOrDirectly', 'O contáctame directamente:')}</p>
            <a href={`mailto:${MY_EMAIL_ADDRESS}`}><FaEnvelope /> {MY_EMAIL_ADDRESS}</a>
            {/* Usamos la constante MY_WHATSAPP_NUMBER para el enlace directo también */}
            <a href={`https://wa.me/${MY_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> {getUIText('contactChatOnWhatsApp', 'Chatea por WhatsApp')}
            </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
'use client'

import { useState } from 'react'
import styles from './Contact.module.css'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaCheck } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // FormSubmit manejará el envío del formulario
    // No necesitamos JavaScript adicional aquí
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      })
    }, 1000)
  }

  const openWhatsApp = () => {
    const phoneNumber = '5491121921888'
    const message = encodeURIComponent('Hola, me interesa obtener asesoramiento inmobiliario.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const openFacebook = () => {
    window.open('https://facebook.com/marianasaratipropiedades', '_blank')
  }

  const openInstagram = () => {
    window.open('https://instagram.com/marianasaratipropiedades', '_blank')
  }

  const sendEmail = () => {
    window.open('mailto:marianasarati@gmail.com?subject=Consulta%20Inmobiliaria', '_blank')
  }

  const makeCall = () => {
    window.open('tel:+541121921888', '_self')
  }

  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <h2>Contactanos</h2>
        <p className={styles.contactIntro}>
          ¿Listo para dar el siguiente paso? Nuestro equipo de expertos está aquí para ayudarte. 
          Contáctanos hoy mismo y comencemos a trabajar juntos en tu proyecto inmobiliario.
        </p>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Información de contacto</h3>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.contactDetails}>
                <h4>Dirección</h4>
                <p>Lavalle 1783 piso 7 B<br />CABA, Argentina</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaPhone />
              </div>
              <div className={styles.contactDetails}>
                <h4>Teléfono</h4>
                <p>
                  <button onClick={makeCall} className={styles.contactLink}>
                    +54 9 11 2192-1888
                  </button>
                </p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaWhatsapp />
              </div>
              <div className={styles.contactDetails}>
                <h4>WhatsApp</h4>
                <p>
                  <button onClick={openWhatsApp} className={styles.contactLink}>
                    +54 9 11 2192-1888
                  </button>
                </p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.contactDetails}>
                <h4>Email</h4>
                <p>
                  <button onClick={sendEmail} className={styles.contactLink}>
                    marianasarati@gmail.com
                  </button>
                </p>
              </div>
            </div>
            
            <div className={styles.socialMedia}>
              <h4>Síguenos en redes sociales</h4>
              <div className={styles.socialIcons}>
                <button 
                  onClick={openFacebook}
                  className={styles.socialIcon}
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </button>
                <button 
                  onClick={openInstagram}
                  className={styles.socialIcon}
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <div className={styles.formCard}>
              <h3>Envíanos tu consulta</h3>
              <p>Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.</p>
              
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <FaCheck className={styles.successIcon} />
                  <h4>¡Mensaje enviado con éxito!</h4>
                  <p>Gracias por contactarnos. Te responderemos pronto.</p>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/marianasarati@gmail.com" 
                  method="POST"
                  onSubmit={handleSubmit}
                  className={styles.form}
                >
                  {/* Configuración de FormSubmit */}
                  <input type="hidden" name="_subject" value="Nueva consulta desde el sitio web" />
                  <input type="hidden" name="_next" value="https://marianasaratipropiedades.com/#contacto" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Nombre completo *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={styles.formInput}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={styles.formInput}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Servicio de interés</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="venta">Venta de propiedades</option>
                        <option value="alquiler">Alquiler de propiedades</option>
                        <option value="tasacion">Tasación</option>
                        <option value="asesoramiento">Asesoramiento inmobiliario</option>
                        <option value="inversion">Inversión inmobiliaria</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Asunto *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={styles.formInput}
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className={styles.formTextarea}
                      placeholder="Cuéntanos más detalles sobre tu consulta..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`btn-primary ${styles.submitBtn}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

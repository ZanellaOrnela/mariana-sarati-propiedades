'use client'

import styles from './Services.module.css'
import { FaHome, FaKey, FaCalculator, FaHandshake } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: "Ventas de propiedades",
      description: "Te ayudamos a vender tu propiedad al mejor precio del mercado con estrategias de marketing personalizadas y un acompañamiento integral durante todo el proceso."
    },
    {
      icon: <FaKey />,
      title: "Alquileres",
      description: "Gestionamos alquileres tanto para propietarios como inquilinos, garantizando contratos seguros y un proceso transparente que protege los intereses de ambas partes."
    },
    {
      icon: <FaCalculator />,
      title: "Tasaciones profesionales",
      description: "Realizamos tasaciones precisas y actualizadas basadas en el análisis del mercado local, utilizando metodologías profesionales reconocidas en el sector."
    },
    {
      icon: <FaHandshake />,
      title: "Asesoramiento integral",
      description: "Brindamos consultoría completa en inversiones inmobiliarias, análisis de rentabilidad y asesoramiento legal para que tomes las mejores decisiones."
    }
  ]

  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <h2>Nuestros servicios</h2>
        <p className={styles.servicesIntro}>
          Ofrecemos un servicio completo e integral para todas tus necesidades inmobiliarias, 
          respaldado por años de experiencia y un equipo de profesionales comprometidos con tu éxito.
        </p>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

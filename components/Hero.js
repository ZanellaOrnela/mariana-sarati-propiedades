'use client'

import styles from './Hero.module.css'
import { FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  const scrollToProperties = () => {
    const element = document.getElementById('propiedades')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    // Número de WhatsApp de ejemplo - reemplazar con el número real
    const phoneNumber = '5491123456789'
    const message = encodeURIComponent('Hola, me interesa obtener más información sobre sus servicios inmobiliarios.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="inicio" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Tu propiedad, nuestra prioridad.
            </h1>
            <p className={styles.heroSubtitle}>
              Compra, venta y alquileres con confianza y respaldo profesional.
            </p>
            <p className={styles.heroDescription}>
              En Mariana Sarati Propiedades acompañamos cada paso de tu operación inmobiliaria con transparencia, compromiso y dedicación. Te ayudamos a encontrar el hogar que buscás o a concretar la mejor inversión en el menor tiempo posible.
            </p>
            <div className={styles.heroButtons}>
              <button 
                onClick={scrollToProperties}
                className="btn-primary"
              >
                Ver propiedades
              </button>
              <button 
                onClick={openWhatsApp}
                className={`btn-secondary ${styles.whatsappBtn}`}
              >
                <FaWhatsapp className={styles.whatsappIcon} />
                Contactanos por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

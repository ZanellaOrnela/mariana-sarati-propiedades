'use client'

import styles from './Properties.module.css'
import { FaBed, FaBath, FaCar, FaMapMarkerAlt } from 'react-icons/fa'

const Properties = () => {
  // Galería de medios de propiedades (fotos reales de Google Drive)
  const propertyMedia = [
    {
      id: 1,
      type: "image",
      src: "https://lh3.googleusercontent.com/d/1DbelOH5e637qbWnmwngg8pDO5udYHng2",
      alt: "Propiedad 1 - Casa moderna en Palermo",
      title: "Casa moderna en Palermo"
    },
    {
      id: 2,
      type: "image",
      src: "https://lh3.googleusercontent.com/d/1G32uCbkdv-DEZmfwlgPsGNZ5b1jFJ8Lz",
      alt: "Propiedad 2 - Departamento en Puerto Madero",
      title: "Departamento en Puerto Madero"
    },
    {
      id: 4,
      type: "image",
      src: "https://lh3.googleusercontent.com/d/18jiOwrewkGa0t-d9UCAMGKI1TnlVUUpO",
      alt: "Propiedad 4 - Loft en Villa Crespo",
      title: "Loft en Villa Crespo"
    },
    {
      id: 5,
      type: "image",
      src: "https://lh3.googleusercontent.com/d/1ayMM2MAajQM3K8eedm_SzSR8SqJbazSN",
      alt: "Propiedad 5 - Casa en Barrio Norte",
      title: "Casa en Barrio Norte"
    },
    {
      id: 6,
      type: "video",
      src: "https://drive.google.com/file/d/1ThZ1SkY2eHp5WR8mp-s0ez_y-QT8rnlI/preview?usp=embed_facebook&chrome=0&toolbar=0&navpanes=0&scrollbar=0&view=FitH",
      alt: "Video Propiedad 6 - Casa con jardín",
      title: "Casa con jardín"
    },
    {
      id: 7,
      type: "video",
      src: "https://drive.google.com/file/d/1ie08sptBEBZenSqxN7o3z6JO2N8UEPyp/preview?usp=embed_facebook&chrome=0&toolbar=0&navpanes=0&scrollbar=0&view=FitH",
      alt: "Video Propiedad 7 - Departamento moderno",
      title: "Departamento moderno"
    },
    {
      id: 8,
      type: "video",
      src: "https://drive.google.com/file/d/1AGdyIUoDpS9M_MoWzbEw2pj3mgEjLV1y/preview?usp=embed_facebook&chrome=0&toolbar=0&navpanes=0&scrollbar=0&view=FitH",
      alt: "Video Propiedad 8 - Casa familiar",
      title: "Casa familiar"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="propiedades" className={styles.properties}>
      <div className="container">
        <h2>Propiedades destacadas</h2>
        <p className={styles.propertiesIntro}>
          Descubre nuestra selección de propiedades exclusivas, cuidadosamente elegidas 
          por su ubicación, calidad y potencial de inversión.
        </p>
        
        <div className={styles.propertiesGrid}>
          {propertyMedia.map((media) => (
            <div key={media.id} className={styles.propertyCard}>
              <div className={styles.mediaContainer}>
                {media.type === "image" ? (
                  <img 
                    src={media.src} 
                    alt={media.alt}
                    className={styles.propertyMedia}
                    loading="lazy"
                  />
                ) : (
                  <iframe 
                    src={media.src}
                    className={styles.propertyMedia}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    title={media.alt}
                  >
                  </iframe>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllContainer}>
          <button 
            onClick={scrollToContact}
            className="btn-secondary"
          >
            Contactarme
          </button>
        </div>
      </div>
    </section>
  )
}

export default Properties

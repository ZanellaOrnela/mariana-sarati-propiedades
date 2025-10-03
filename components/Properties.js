'use client'

import styles from './Properties.module.css'
import { FaBed, FaBath, FaCar, FaMapMarkerAlt } from 'react-icons/fa'

const Properties = () => {
  // Datos mock de propiedades
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Casa moderna en Palermo",
      location: "Palermo, CABA",
      description: "Hermosa casa de 3 ambientes con jardín privado, totalmente renovada con materiales de primera calidad.",
      price: "USD 450.000",
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      type: "Venta"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Departamento en Puerto Madero",
      location: "Puerto Madero, CABA",
      description: "Moderno departamento de 2 ambientes con vista al río, amenities completos y ubicación premium.",
      price: "USD 320.000",
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
      type: "Venta"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Casa familiar en San Isidro",
      location: "San Isidro, GBA Norte",
      description: "Amplia casa familiar de 4 ambientes con piscina, quincho y gran parque. Ideal para familias.",
      price: "ARS 85.000/mes",
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      type: "Alquiler"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Loft en Villa Crespo",
      location: "Villa Crespo, CABA",
      description: "Moderno loft de 1 ambiente con diseño contemporáneo, ideal para jóvenes profesionales.",
      price: "ARS 45.000/mes",
      bedrooms: 1,
      bathrooms: 1,
      parking: 0,
      type: "Alquiler"
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
          {properties.map((property) => (
            <div key={property.id} className={styles.propertyCard}>
              <div className={styles.propertyImageContainer}>
                <img 
                  src={property.image} 
                  alt={`${property.title} - ${property.type} en ${property.location}`}
                  className={styles.propertyImage}
                  loading="lazy"
                />
                <div className={styles.propertyType}>
                  {property.type}
                </div>
              </div>
              
              <div className={styles.propertyContent}>
                <h3 className={styles.propertyTitle}>{property.title}</h3>
                
                <div className={styles.propertyLocation}>
                  <FaMapMarkerAlt className={styles.locationIcon} />
                  <span>{property.location}</span>
                </div>
                
                <p className={styles.propertyDescription}>
                  {property.description}
                </p>
                
                <div className={styles.propertyFeatures}>
                  <div className={styles.feature}>
                    <FaBed />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className={styles.feature}>
                    <FaBath />
                    <span>{property.bathrooms}</span>
                  </div>
                  {property.parking > 0 && (
                    <div className={styles.feature}>
                      <FaCar />
                      <span>{property.parking}</span>
                    </div>
                  )}
                </div>
                
                <div className={styles.propertyFooter}>
                  <div className={styles.propertyPrice}>
                    {property.price}
                  </div>
                  <button 
                    onClick={scrollToContact}
                    className="btn-primary"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllContainer}>
          <button 
            onClick={scrollToContact}
            className="btn-secondary"
          >
            Ver todas las propiedades
          </button>
        </div>
      </div>
    </section>
  )
}

export default Properties

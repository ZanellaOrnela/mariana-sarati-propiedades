'use client'

import { useState, useEffect } from 'react'
import styles from './WhatsAppButton.module.css'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = '5491123456789'
    const message = encodeURIComponent('Hola! Me interesa obtener información sobre sus servicios inmobiliarios.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  if (!isVisible) return null

  return (
    <div className={`${styles.whatsappButton} ${isExpanded ? styles.expanded : ''}`}>
      {isExpanded && (
        <div className={styles.whatsappTooltip}>
          <div className={styles.tooltipContent}>
            <h4>¡Hola! 👋</h4>
            <p>¿Necesitas ayuda con tu consulta inmobiliaria?</p>
            <p>Chatea con nosotros por WhatsApp</p>
          </div>
          <button 
            className={styles.closeTooltip}
            onClick={toggleExpanded}
            aria-label="Cerrar"
          >
            <FaTimes />
          </button>
        </div>
      )}
      
      <button 
        className={styles.whatsappMainButton}
        onClick={isExpanded ? openWhatsApp : toggleExpanded}
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className={styles.whatsappIcon} />
      </button>
    </div>
  )
}

export default WhatsAppButton

'use client'

import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Image 
              src="/images/ChatGPT Image 2 oct 2025, 01_45_42 p.m..png"
              alt="Logo de Mariana Sarati Propiedades - Inmobiliaria profesional"
              width={260}
              height={78}
              className={styles.footerLogo}
              priority={false}
            />
            <p>Tu propiedad, nuestra prioridad.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>Enlaces rápidos</h4>
            <ul>
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className={styles.footerLink}
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre-nosotros')}
                  className={styles.footerLink}
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className={styles.footerLink}
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('propiedades')}
                  className={styles.footerLink}
                >
                  Propiedades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className={styles.footerLink}
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© {currentYear} Mariana Sarati Propiedades — Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <Image 
              src="/images/ChatGPT Image 2 oct 2025, 01_45_42 p.m..png"
              alt="Mariana Sarati Propiedades"
              width={280}
              height={70}
              className={styles.logoImage}
              priority
            />
          </div>

          {/* Navegación Desktop */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className={styles.navLink}
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre-nosotros')}
                  className={styles.navLink}
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className={styles.navLink}
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('propiedades')}
                  className={styles.navLink}
                >
                  Propiedades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className={styles.navLink}
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className={styles.ctaContainer}>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="btn-primary"
            >
              Vender mi propiedad
            </button>
          </div>

          {/* Botón menú móvil */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navegación Móvil */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <ul className={styles.mobileNavList}>
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className={styles.mobileNavLink}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('sobre-nosotros')}
                className={styles.mobileNavLink}
              >
                Sobre Nosotros
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('servicios')}
                className={styles.mobileNavLink}
              >
                Servicios
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('propiedades')}
                className={styles.mobileNavLink}
              >
                Propiedades
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contacto')}
                className={styles.mobileNavLink}
              >
                Contacto
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="btn-primary"
                style={{ width: '100%', marginTop: '1rem' }}
              >
                Vender mi propiedad
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

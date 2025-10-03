'use client'

import styles from './About.module.css'

const About = () => {
  return (
    <section id="sobre-nosotros" className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>Experiencia y compromiso en el mercado inmobiliario</h2>
            <div className={styles.textContent}>
              <p>
                En <strong>Mariana Sarati Propiedades</strong>, entendemos que comprar, 
                vender o alquilar una propiedad es una de las decisiones más importantes 
                de tu vida. Por eso, nos comprometemos a brindarte un servicio personalizado 
                y profesional que supere tus expectativas.
              </p>
              <p>
                Con más de una década de experiencia en el mercado inmobiliario, 
                nuestro equipo de expertos te acompaña en cada paso del proceso, 
                desde la búsqueda inicial hasta la firma del contrato. Conocemos 
                el mercado local como nadie y utilizamos las últimas herramientas 
                tecnológicas para garantizar los mejores resultados.
              </p>
              <p>
                Nuestra misión es simple: <em>hacer realidad tus sueños inmobiliarios</em> 
                con transparencia, confianza y el más alto nivel de servicio al cliente.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h3>500+</h3>
                  <p>Propiedades vendidas</p>
                </div>
                <div className={styles.stat}>
                  <h3>10+</h3>
                  <p>Años de experiencia</p>
                </div>
                <div className={styles.stat}>
                  <h3>98%</h3>
                  <p>Clientes satisfechos</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Equipo profesional de Mariana Sarati Propiedades trabajando en oficina inmobiliaria"
              className={styles.aboutImg}
              loading="lazy"
            />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h4>Mariana Sarati</h4>
                <p>Fundadora y Directora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

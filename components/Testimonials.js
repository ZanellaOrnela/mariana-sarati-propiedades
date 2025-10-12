'use client'

import styles from './Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Mariana nos ayudó a encontrar la casa perfecta para nuestra familia. Su conocimiento del mercado inmobiliario y su dedicación fueron excepcionales. Definitivamente la recomiendo.",
      author: "María González",
      role: "Compradora",
      rating: 5,
    },
    {
      id: 2,
      text: "El proceso de venta de nuestra propiedad fue muy profesional y eficiente. Mariana se encargó de todo y logramos vender en tiempo récord con un excelente precio.",
      author: "Carlos Rodríguez",
      role: "Vendedor",
      rating: 5,
    },
    {
      id: 3,
      text: "Como inversionista, he trabajado con muchas inmobiliarias, pero Mariana destaca por su honestidad y conocimiento del mercado. Siempre me da los mejores consejos.",
      author: "Ana Martínez",
      role: "Inversionista",
      rating: 5,
    }
  ]

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonialsIntro}>
          <h2>Lo que dicen nuestros clientes</h2>
          <p>
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Conoce las experiencias de quienes han confiado en nosotros para 
            hacer realidad sus sueños inmobiliarios.
          </p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              
              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>
              
              <p className={styles.testimonialText}>
                {testimonial.text}
              </p>
              
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.author}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

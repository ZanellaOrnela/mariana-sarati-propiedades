import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Properties from '../components/Properties'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <About />
      <Services />
      <Properties />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}


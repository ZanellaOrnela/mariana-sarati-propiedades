import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mariana Sarati Propiedades - Tu propiedad, nuestra prioridad',
  description: 'Compra, venta y alquileres con confianza y respaldo profesional. Experiencia y compromiso en el mercado inmobiliario.',
  keywords: 'inmobiliaria, propiedades, venta, alquiler, tasaciones, asesoramiento, Buenos Aires, CABA, departamentos, casas, inversión inmobiliaria',
  authors: [{ name: 'Mariana Sarati' }],
  creator: 'Mariana Sarati Propiedades',
  publisher: 'Mariana Sarati Propiedades',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marianasaratipropiedades.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mariana Sarati Propiedades - Tu propiedad, nuestra prioridad',
    description: 'Compra, venta y alquileres con confianza y respaldo profesional. Experiencia y compromiso en el mercado inmobiliario.',
    url: 'https://marianasaratipropiedades.com',
    siteName: 'Mariana Sarati Propiedades',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Mariana Sarati Propiedades - Inmobiliaria profesional',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariana Sarati Propiedades - Tu propiedad, nuestra prioridad',
    description: 'Compra, venta y alquileres con confianza y respaldo profesional. Experiencia y compromiso en el mercado inmobiliario.',
    images: ['/images/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
}

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Mariana Sarati Propiedades",
    "description": "Compra, venta y alquileres con confianza y respaldo profesional. Experiencia y compromiso en el mercado inmobiliario.",
    "url": "https://marianasaratipropiedades.com",
    "logo": "https://marianasaratipropiedades.com/images/ChatGPT Image 2 oct 2025, 01_45_42 p.m..png",
    "image": "https://marianasaratipropiedades.com/images/hero-bg.png",
    "telephone": "+54-9-11-1234-5678",
    "email": "info@marianasaratipropiedades.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Corrientes 1234",
      "addressLocality": "Buenos Aires",
      "addressRegion": "CABA",
      "postalCode": "C1043",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.6037",
      "longitude": "-58.3816"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-13:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-34.6037",
        "longitude": "-58.3816"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Inmobiliarios",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Venta de Propiedades",
            "description": "Asesoramiento profesional para la venta de tu propiedad al mejor precio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Alquiler de Propiedades",
            "description": "Encuentra la propiedad perfecta para alquilar o alquila la tuya"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tasaciones",
            "description": "Valuación profesional y precisa de tu propiedad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asesoramiento Inmobiliario",
            "description": "Consultoría especializada en inversiones y operaciones inmobiliarias"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/marianasaratipropiedades",
      "https://www.instagram.com/marianasaratipropiedades",
      "https://wa.me/5491123456789"
    ]
  }

  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://marianasaratipropiedades.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mariana Sarati Propiedades - Tu propiedad, nuestra prioridad" />
        <meta property="og:description" content="Compra, venta y alquileres con confianza y respaldo profesional. Experiencia y compromiso en el mercado inmobiliario." />
        <meta property="og:url" content="https://marianasaratipropiedades.com" />
        <meta property="og:image" content="https://marianasaratipropiedades.com/images/hero-bg.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Mariana Sarati Propiedades" />
        <meta property="og:locale" content="es_AR" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mariana Sarati Propiedades - Tu propiedad, nuestra prioridad" />
        <meta name="twitter:description" content="Compra, venta y alquileres con confianza y respaldo profesional. Experiencia y compromiso en el mercado inmobiliario." />
        <meta name="twitter:image" content="https://marianasaratipropiedades.com/images/hero-bg.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="manifest" href="/site.webmanifest?v=3" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}


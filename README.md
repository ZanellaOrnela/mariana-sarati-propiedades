# Mariana Sarati Propiedades

Sitio web moderno y minimalista para la inmobiliaria "Mariana Sarati Propiedades", desarrollado con Next.js 14 y React.

## 🚀 Características

- **Framework**: Next.js 14 con App Router
- **Estilos**: CSS Modules para encapsulación de estilos
- **Iconos**: React Icons
- **Diseño**: Minimalista y moderno con paleta de colores profesional
- **Responsive**: Completamente adaptable a dispositivos móviles
- **Navegación**: Scroll suave entre secciones
- **Optimización**: Imágenes optimizadas y rendimiento mejorado

## 🎨 Paleta de Colores

- **Gris Carbón**: `#333333` (Texto principal, fondos oscuros)
- **Gris Claro Frío**: `#F5F7FA` (Fondos de sección)
- **Turquesa Oscuro**: `#008080` (Botones de CTA, acentos, íconos)
- **Blanco Puro**: `#FFFFFF` (Fondos)

## 📁 Estructura del Proyecto

```
mariana-sarati-propiedades/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Header.js & Header.module.css
│   ├── Hero.js & Hero.module.css
│   ├── About.js & About.module.css
│   ├── Services.js & Services.module.css
│   ├── Properties.js & Properties.module.css
│   ├── Testimonials.js & Testimonials.module.css
│   ├── Contact.js & Contact.module.css
│   └── Footer.js & Footer.module.css
├── package.json
├── next.config.js
└── README.md
```

## 🛠️ Instalación y Ejecución

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   Visita [http://localhost:3000](http://localhost:3000)

## 📱 Secciones del Sitio

1. **Header**: Navegación con logo y menú responsive
2. **Hero**: Sección principal con título y CTAs
3. **Sobre Nosotros**: Información de la empresa y estadísticas
4. **Servicios**: 4 servicios principales con iconos
5. **Propiedades Destacadas**: Galería de propiedades con datos mock
6. **Testimonios**: Reseñas de clientes con calificaciones
7. **Contacto**: Información de contacto y redes sociales
8. **Footer**: Enlaces rápidos y copyright

## 🔧 Personalización

### Datos de Contacto
Edita los siguientes archivos para actualizar la información de contacto:

- `components/Contact.js`: Números de teléfono, email, dirección
- `components/Hero.js`: Número de WhatsApp

### Propiedades
Las propiedades mostradas son datos mock. Edita el array `properties` en `components/Properties.js` para actualizar con propiedades reales.

### Testimonios
Actualiza el array `testimonials` en `components/Testimonials.js` con testimonios reales de clientes.

## 🌐 Producción

Para crear una versión de producción:

```bash
npm run build
npm start
```

## 📞 Funcionalidades de Contacto

- **WhatsApp**: Enlaces directos con mensajes predefinidos
- **Teléfono**: Enlaces para llamadas directas
- **Email**: Enlaces mailto con asuntos predefinidos
- **Redes Sociales**: Enlaces a Facebook e Instagram (configurar URLs reales)

## 🎯 SEO y Rendimiento

- Metadatos optimizados en `app/layout.js`
- Imágenes optimizadas de Unsplash
- Estructura semántica HTML5
- Scroll suave implementado
- Diseño responsive con CSS Grid y Flexbox

---

**Desarrollado con ❤️ para Mariana Sarati Propiedades**





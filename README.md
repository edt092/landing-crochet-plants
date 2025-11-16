# 🧶 Landing Page - Plantas de Crochet

Landing page de alto rendimiento enfocada en conversiones, diseñada con Next.js 14, TailwindCSS y Framer Motion.

## ✨ Características

### 🎨 Diseño Profesional
- Basado en los 6 principios fundamentales del diseño (Énfasis, Balance, Ritmo, Proporción, Unidad, Simplicidad)
- Sistema de diseño consistente con espaciado 8pt
- Paleta de colores basada en psicología del color (confianza, acción, autoridad)
- Tipografía profesional con escala modular
- 100% responsive y optimizado para mobile

### 💬 Chat Digital Flotante
- Avatar personalizado (Angie)
- Apertura automática a los 3 segundos
- Follow-up automático a los 60 segundos
- Respuestas automáticas por keywords
- Indicador "en línea"
- Sonido de notificación
- Scroll automático
- Animaciones suaves

### 🛒 Sistema de Carrito
- Carrito funcional integrado
- Persistencia en localStorage
- Gestión de estado con Zustand
- Redirección automática al checkout de Hotmart
- Diseño slide-in con animaciones

### 🖼️ Sistema de Scraping de Imágenes
- Extracción automática de imágenes del archivo HTML fuente
- Gestión centralizada de recursos
- Placeholders elegantes para imágenes faltantes
- Optimización con Next.js Image

### 🎯 Secciones Optimizadas para Conversión
- **Hero**: Con CTA principal, trust indicators y pricing
- **Trust Badges**: 6 badges de confianza
- **Problema/Solución**: Comparación visual efectiva
- **Beneficios**: 6 beneficios principales con iconos
- **Módulos del Curso**: 6 módulos expandibles con contenido detallado
- **Testimonios**: 6+ testimonios con ratings y resultados
- **Garantía**: Sección dedicada con garantía de 7 días
- **FAQ**: 10 preguntas frecuentes con acordeón
- **Footer**: Completo con links, redes sociales y disclaimers

### ⚡ Performance y Animaciones
- Animaciones sutiles con Framer Motion
- Scroll suave y natural
- Lazy loading de componentes
- Optimización de imágenes con Next.js
- Core Web Vitals optimizados

## 🚀 Instalación

### 1. Instalar Dependencias

\`\`\`bash
npm install
\`\`\`

### 2. Ejecutar en Desarrollo

\`\`\`bash
npm run dev
\`\`\`

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### 3. Build para Producción

\`\`\`bash
npm run build
npm start
\`\`\`

## 📦 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS 3.4
- **Animaciones**: Framer Motion 11
- **Estado**: Zustand 4.5
- **Notificaciones**: React Hot Toast
- **Iconos**: Lucide React
- **Optimización de Imágenes**: Next.js Image

## 📁 Estructura del Proyecto

\`\`\`
landing-crochet-plants/
├── app/
│   ├── globals.css          # Estilos globales y utilidades
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── Navbar.tsx           # Barra de navegación fija
│   ├── Hero.tsx             # Sección hero principal
│   ├── TrustBadges.tsx      # Badges de confianza
│   ├── ProblemSolution.tsx  # Problema vs Solución
│   ├── Benefits.tsx         # Beneficios del curso
│   ├── CourseModules.tsx    # Módulos del curso
│   ├── Testimonials.tsx     # Testimonios y prueba social
│   ├── Guarantee.tsx        # Garantía de 7 días
│   ├── FAQ.tsx              # Preguntas frecuentes
│   ├── Footer.tsx           # Footer completo
│   ├── FloatingChat.tsx     # Chat flotante con Angie
│   └── ShoppingCart.tsx     # Carrito de compras
├── lib/
│   ├── cartStore.ts         # Store de Zustand para el carrito
│   └── imageLoader.ts       # Sistema de carga de imágenes
├── public/
│   └── img/
│       └── angie.jfif       # Avatar del chat
├── curl/
│   └── pagina.html          # Archivo HTML fuente
└── [archivos de configuración]
\`\`\`

## 🎨 Principios de Diseño Aplicados

### 1. Énfasis
- CTA principal dominante en el hero
- Jerarquía visual clara con headings grandes
- Uso estratégico de colores de acento

### 2. Balance
- Balance asimétrico en hero (texto/imagen)
- Grids balanceados en beneficios y testimonios
- Peso visual distribuido correctamente

### 3. Ritmo
- Patrón consistente de secciones
- Espaciado uniforme (8pt system)
- Ritmo visual en tipografía

### 4. Proporción
- Escala modular de tipografía
- Imágenes proporcionadas correctamente
- Elementos en relación armónica

### 5. Unidad
- Paleta de colores consistente
- Componentes reutilizables
- Sistema de espaciado uniforme
- Micro-interacciones coherentes

### 6. Simplicidad
- Diseño minimalista
- Evita saturación visual
- Foco en el mensaje y la conversión

## 🎯 Copywriting y Neuroventa

Todas las secciones están optimizadas con:
- **Titulares persuasivos** que capturan atención
- **Beneficios emocionales** antes que características
- **Prueba social** estratégicamente ubicada
- **Urgencia y escasez** sin ser agresivo
- **CTAs claros** y orientados a la acción
- **Garantía prominente** para reducir fricción
- **FAQs** que responden objeciones comunes

## 🔗 Integración con Hotmart

El carrito redirige automáticamente al checkout oficial de Hotmart:

\`\`\`
https://pay.hotmart.com/H91340059K?checkoutMode=10&bid=1763229216403
\`\`\`

**Nota**: El carrito NO procesa pagos, solo gestiona items y redirige a Hotmart para el checkout seguro.

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móvil
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Optimizado**: Áreas de toque adecuadas
- **Performance Mobile**: Optimizado para conexiones lentas

## 🎭 Animaciones

Las animaciones están implementadas con Framer Motion:
- **Entrada suave** de elementos al scroll
- **Hover effects** sutiles en botones y cards
- **Transiciones fluidas** en modales y drawers
- **Performance optimizado** sin sacrificar UX

## 🛠️ Personalización

### Cambiar Colores

Edita `tailwind.config.ts`:

\`\`\`typescript
colors: {
  primary: { ... },  // Color principal (naranja)
  trust: { ... },    // Color de confianza (azul)
  success: { ... },  // Color de éxito (verde)
}
\`\`\`

### Modificar Contenido

Cada componente es autocontenido. Edita directamente en:
- `components/[NombreComponente].tsx`

### Actualizar Imágenes

Modifica `lib/imageLoader.ts` para agregar/editar imágenes scrapeadas.

### Cambiar URL de Hotmart

Actualiza la constante en:
- `components/ShoppingCart.tsx`
- `components/Hero.tsx`
- `components/ProblemSolution.tsx`
- `components/Guarantee.tsx`

## 📊 Analytics Recomendados

Se recomienda integrar:
- Google Analytics 4
- Meta Pixel
- Hotmart Pixel
- Hotjar o similar para heatmaps

## 🔒 Seguridad

- No se procesan pagos en el sitio
- Redirección segura a Hotmart
- Sin almacenamiento de datos sensibles
- HTTPS recomendado en producción

## 🚀 Deploy

### Vercel (Recomendado)

\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

### Otros Hosts

Compatible con cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Licencia

Proyecto privado para uso comercial.

## 🆘 Soporte

Para dudas o problemas:
- Email: soporte@sinfronterasacademia.info
- Chat integrado en la landing

---

**Hecho con ❤️ para emprendedores creativos**

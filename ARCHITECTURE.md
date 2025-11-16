# 🏗️ Arquitectura del Proyecto

## Visión General

Esta landing page está construida con una arquitectura modular basada en componentes de React, optimizada para conversiones y rendimiento.

## Stack Tecnológico

\`\`\`
┌─────────────────────────────────────┐
│         Next.js 14 (App Router)     │
├─────────────────────────────────────┤
│  React 18 + TypeScript              │
├─────────────────────────────────────┤
│  TailwindCSS 3.4 (Utility-First)    │
├─────────────────────────────────────┤
│  Framer Motion (Animations)         │
├─────────────────────────────────────┤
│  Zustand (State Management)         │
└─────────────────────────────────────┘
\`\`\`

## Arquitectura de Componentes

### Nivel 1: Layout Principal
\`\`\`
app/layout.tsx
├── Metadata (SEO)
├── Global Styles
└── Toast Provider
\`\`\`

### Nivel 2: Página Principal
\`\`\`
app/page.tsx
├── Navbar (Fixed)
├── Hero Section
├── Trust Badges
├── Problem vs Solution
├── Benefits
├── Course Modules
├── Testimonials
├── Guarantee
├── FAQ
├── Footer
├── Floating Chat (Fixed)
└── Shopping Cart (Drawer)
\`\`\`

### Nivel 3: Componentes Atómicos

#### Navbar (`components/Navbar.tsx`)
\`\`\`
Navbar
├── Logo + Brand
├── Navigation Links
│   ├── Beneficios
│   ├── Contenido
│   ├── Testimonios
│   └── FAQ
└── Cart Button
    └── Badge (item count)
\`\`\`

#### Hero (`components/Hero.tsx`)
\`\`\`
Hero
├── Badge (Certificado)
├── Main Headline
│   └── Highlighted Text
├── Sub-headline
├── Trust Indicators
│   ├── Student Count
│   └── Rating Stars
├── CTA Buttons
│   ├── Primary (Add to Cart)
│   └── Secondary (Demo)
├── Price Display
│   ├── Current Price
│   ├── Original Price
│   └── Discount Badge
└── Hero Image
    └── Floating Cards
        ├── Testimonial Card
        └── Stats Badge
\`\`\`

#### Shopping Cart (`components/ShoppingCart.tsx`)
\`\`\`
ShoppingCart
├── Overlay (Backdrop)
└── Drawer Panel
    ├── Header
    │   ├── Title + Item Count
    │   └── Close Button
    ├── Items List
    │   └── Cart Item
    │       ├── Image
    │       ├── Info
    │       ├── Quantity Controls
    │       └── Remove Button
    └── Footer
        ├── Price Summary
        │   ├── Subtotal
        │   ├── Shipping
        │   └── Total
        ├── Checkout Button
        └── Security Badge
\`\`\`

#### Floating Chat (`components/FloatingChat.tsx`)
\`\`\`
FloatingChat
├── Float Button (When Closed)
│   └── Notification Badge
└── Chat Window (When Open)
    ├── Header
    │   ├── Avatar + Status
    │   ├── Minimize Button
    │   └── Close Button
    ├── Messages Area
    │   ├── Bot Messages
    │   ├── User Messages
    │   └── Typing Indicator
    └── Input Area
        ├── Text Input
        └── Send Button
\`\`\`

## Gestión de Estado

### Zustand Store (Cart)
\`\`\`typescript
CartStore
├── State
│   ├── items: CartItem[]
│   └── isOpen: boolean
├── Actions
│   ├── addItem()
│   ├── removeItem()
│   ├── updateQuantity()
│   ├── clearCart()
│   └── toggleCart()
└── Computed
    ├── getTotalItems()
    └── getTotalPrice()
\`\`\`

### Local State (Chat)
\`\`\`typescript
FloatingChat
├── State
│   ├── isOpen
│   ├── isMinimized
│   ├── messages[]
│   ├── inputValue
│   ├── isTyping
│   └── hasInteracted
└── Effects
    ├── Auto-open (3s)
    ├── Follow-up (60s)
    └── Auto-scroll
\`\`\`

## Sistema de Imágenes

\`\`\`
lib/imageLoader.ts
├── ScrapedImage Interface
├── Images Array
│   ├── hero
│   ├── features
│   ├── testimonials
│   ├── projects
│   ├── modules
│   ├── results
│   ├── bonus
│   ├── tutorials
│   ├── social-proof
│   ├── content
│   ├── patterns
│   └── guarantee
├── getImageById()
├── getImagesByCategory()
└── placeholderImage
\`\`\`

## Flujo de Datos

### Flujo de Compra
\`\`\`
Usuario ve producto
    ↓
Click en "Comenzar Ahora"
    ↓
addItem() → CartStore
    ↓
Toast notification
    ↓
Cart opens (toggleCart())
    ↓
Usuario revisa items
    ↓
Click "Proceder al Pago"
    ↓
Redirección a Hotmart
\`\`\`

### Flujo del Chat
\`\`\`
Usuario entra al sitio
    ↓
3 segundos → Chat abre automáticamente
    ↓
Bot envía mensaje de bienvenida
    ↓
Usuario escribe mensaje
    ↓
Detección de keyword
    ↓
Respuesta automática
    ↓
60 segundos sin interacción → Follow-up
\`\`\`

## Diseño Responsivo

### Breakpoints
\`\`\`
Mobile:  < 640px   (sm)
Tablet:  640-1024px (md-lg)
Desktop: > 1024px   (lg+)
\`\`\`

### Grid System
\`\`\`
Mobile:   1 columna
Tablet:   2 columnas
Desktop:  3-6 columnas (según sección)
\`\`\`

## Sistema de Animaciones

### Entrada de Elementos
\`\`\`typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
\`\`\`

### Hover States
\`\`\`typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
\`\`\`

### Modales y Drawers
\`\`\`typescript
initial={{ x: '100%' }}
animate={{ x: 0 }}
exit={{ x: '100%' }}
transition={{ type: 'spring' }}
\`\`\`

## Sistema de Estilos

### Utility Classes Personalizadas
\`\`\`css
.container-custom     /* Max-width container */
.section-spacing      /* Consistent padding */
.btn-primary         /* Primary CTA button */
.btn-secondary       /* Secondary button */
.heading-xl/lg/md    /* Typography scale */
.card                /* Consistent card style */
.badge               /* Small labels */
\`\`\`

### Paleta de Colores
\`\`\`
Primary (Orange):  #f06d1f - Acción, energía
Trust (Blue):      #3b82f6 - Confianza, profesional
Success (Green):   #22c55e - Logro, garantía
\`\`\`

## Optimizaciones

### Performance
- ✅ Lazy loading de componentes
- ✅ Next.js Image optimization
- ✅ Code splitting automático
- ✅ Persistent state (localStorage)
- ✅ Debounced animations

### SEO
- ✅ Metadata en layout
- ✅ Semantic HTML
- ✅ Accessible ARIA labels
- ✅ Alt text en imágenes
- ✅ Structured data ready

### UX
- ✅ Scroll suave
- ✅ Loading states
- ✅ Error boundaries
- ✅ Toast notifications
- ✅ Keyboard navigation

## Seguridad

### Datos Sensibles
- ❌ No se procesan pagos
- ❌ No se almacenan datos de tarjetas
- ✅ Redirección segura a Hotmart
- ✅ HTTPS requerido en producción

### Validación
- ✅ Input sanitization en chat
- ✅ Type safety con TypeScript
- ✅ Client-side validation

## Extensibilidad

### Agregar Nueva Sección
1. Crear componente en `/components`
2. Importar en `app/page.tsx`
3. Agregar al flujo de navegación
4. Actualizar tipos si es necesario

### Agregar Nuevo Producto
1. Definir en componente relevante
2. Usar interface `Product` del store
3. Llamar `addItem()` desde CTA

### Integrar Analytics
1. Agregar script en `app/layout.tsx`
2. Instrumentar eventos en componentes
3. Configurar tracking de conversiones

## Testing Checklist

- [ ] Todos los links funcionan
- [ ] CTAs redirigen correctamente
- [ ] Cart persiste al recargar
- [ ] Chat responde keywords
- [ ] Animaciones son suaves
- [ ] Responsive en todos los tamaños
- [ ] Imágenes cargan correctamente
- [ ] No hay errores en consola
- [ ] Performance > 90 en Lighthouse
- [ ] Accesibilidad > 90 en Lighthouse

## Mantenimiento

### Actualizar Contenido
- Modificar constantes en componentes
- Actualizar imágenes en `lib/imageLoader.ts`
- Cambiar copy directamente en JSX

### Actualizar Dependencias
\`\`\`bash
npm outdated
npm update
\`\`\`

### Monitorear Performance
- Google PageSpeed Insights
- Lighthouse CI
- Core Web Vitals

---

**Arquitectura diseñada para escalabilidad, performance y conversiones óptimas.**

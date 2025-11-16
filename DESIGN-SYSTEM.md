# 🎨 Sistema de Diseño - Landing Plantas de Crochet

## 🎯 Principios de Diseño

### 1. **ÉNFASIS** - Jerarquía Visual Clara
```
┌─────────────────────────────────────────┐
│  🎯 CTA PRINCIPAL (Más grande)         │
│  ────────────────────────────────────   │
│  Headline Principal (60px)              │
│  Sub-headline (20px)                    │
│  Texto de soporte (16px)                │
│                                         │
│  [COMENZAR AHORA] ← Dominante          │
│  [Ver Demo]       ← Secundario         │
└─────────────────────────────────────────┘
```

### 2. **BALANCE** - Peso Visual Distribuido
```
┌──────────────┬──────────────┐
│   TEXTO      │   IMAGEN     │
│   (40%)      │   (60%)      │
│   ├ Titular  │   ┌────────┐ │
│   ├ Copy     │   │  Hero  │ │
│   ├ CTAs     │   │  Image │ │
│   └ Precio   │   └────────┘ │
└──────────────┴──────────────┘
```

### 3. **RITMO** - Patrón Consistente
```
Hero (Grande + Espaciado)
    ↓ 16px
Trust Badges (Compacto)
    ↓ 24px
Problem/Solution (Contrastante)
    ↓ 32px
Benefits (Grid uniforme)
    ↓ 32px
Modules (Vertical + Acordeón)
    ↓ 32px
... y así sucesivamente
```

### 4. **PROPORCIÓN** - Escala Modular
```
Typography Scale:
━━━━━━━━━━━━━━━
60px - Headline XL (Hero)
48px - Headline LG (Secciones)
36px - Headline MD (Subsecciones)
24px - Heading (Cards)
20px - Large Text (Sub-headlines)
16px - Body Text (Párrafos)
14px - Small Text (Metadata)
12px - Tiny Text (Labels)
```

### 5. **UNIDAD** - Coherencia Total
```
┌─────────────────────────────────┐
│  Todos los componentes usan:    │
│  ✓ Mismo espaciado (8pt)        │
│  ✓ Mismos colores (Primarios)   │
│  ✓ Mismos radius (8/12/16/24px) │
│  ✓ Mismas sombras (soft/xl)     │
│  ✓ Mismas animaciones (spring)  │
└─────────────────────────────────┘
```

### 6. **SIMPLICIDAD** - Minimalismo Efectivo
```
❌ NO:                    ✅ SÍ:
- Múltiples colores      - 3 colores base
- Muchas fuentes         - 2 fuentes
- Animaciones complejas  - Animaciones sutiles
- Elementos innecesarios - Solo lo esencial
```

---

## 🎨 Paleta de Colores

### Colores Primarios
```
PRIMARY (Acción/Energía)
━━━━━━━━━━━━━━━━━━━━━
#f06d1f  ████  600 (Principal)
#e15215  ████  700 (Hover)
#fdebd7  ░░░░  100 (Background)
#fef6ee  ░░░░  50  (Subtle)

USO: CTAs, Links, Acentos importantes

TRUST (Confianza/Profesional)
━━━━━━━━━━━━━━━━━━━━━━━━━━
#3b82f6  ████  600 (Principal)
#2563eb  ████  700 (Hover)
#dbeafe  ░░░░  100 (Background)
#eff6ff  ░░░░  50  (Subtle)

USO: Badges de seguridad, Información importante

SUCCESS (Logro/Garantía)
━━━━━━━━━━━━━━━━━━━━━━━━
#22c55e  ████  600 (Principal)
#16a34a  ████  700 (Hover)
#dcfce7  ░░░░  100 (Background)
#f0fdf4  ░░░░  50  (Subtle)

USO: Garantía, Éxito, Logros, Checks
```

### Colores Neutros
```
GRAYS (Texto y Backgrounds)
━━━━━━━━━━━━━━━━━━━━━━━━━
#111827  ████  900 (Heading)
#374151  ████  700 (Body)
#6b7280  ████  600 (Secondary)
#9ca3af  ████  400 (Muted)
#f9fafb  ░░░░  50  (Background)
#ffffff  ░░░░  White
```

---

## 📝 Tipografía

### Fuentes
```
PRIMARY FONT: Inter
━━━━━━━━━━━━━━━━
Weights: 300, 400, 500, 600, 700, 800
Uso: Cuerpo, párrafos, texto general

HEADING FONT: Poppins
━━━━━━━━━━━━━━━━━━━━
Weights: 600, 700, 800, 900
Uso: Titulares, headlines, énfasis
```

### Jerarquía Tipográfica
```
H1 - Hero Headline
━━━━━━━━━━━━━━━━━━━
Font: Poppins Bold
Size: 60px (desktop) / 36px (mobile)
Line Height: 1.1
Letter Spacing: -0.02em
Color: Gray 900

H2 - Section Headline
━━━━━━━━━━━━━━━━━━━━
Font: Poppins Bold
Size: 48px (desktop) / 32px (mobile)
Line Height: 1.2
Color: Gray 900

Body - Paragraph
━━━━━━━━━━━━━━━
Font: Inter Regular
Size: 16px
Line Height: 1.6
Color: Gray 700
```

---

## 📐 Espaciado y Layout

### Sistema de 8 Puntos
```
Base Unit: 8px

4px   (0.5) - Micro
8px   (1)   - Tiny
16px  (2)   - Small
24px  (3)   - Medium
32px  (4)   - Large
48px  (6)   - XL
64px  (8)   - 2XL
96px  (12)  - 3XL
128px (16)  - 4XL
```

### Espaciado de Secciones
```
┌────────────────────────────────┐
│  Section (py-16 md:py-24)      │ ← 96-128px padding
│                                │
│  ┌──────────────────────────┐  │
│  │  Content Container       │  │ ← Max-width: 1280px
│  │  (px-4 sm:px-6 lg:px-8) │  │
│  └──────────────────────────┘  │
│                                │
└────────────────────────────────┘
```

### Grid System
```
Mobile (< 640px)
┌──────────────┐
│   1 Column   │
└──────────────┘

Tablet (640-1024px)
┌───────┬───────┐
│  Col  │  Col  │
└───────┴───────┘

Desktop (> 1024px)
┌────┬────┬────┬────┐
│Col │Col │Col │Col │
└────┴────┴────┴────┘
```

---

## 🎭 Componentes UI

### Botones
```
PRIMARY BUTTON
━━━━━━━━━━━━━
┌─────────────────────────┐
│  COMENZAR AHORA    →   │  ← Orange, Bold, Large
└─────────────────────────┘
Padding: px-8 py-4
Border Radius: 9999px (rounded-full)
Shadow: lg hover:xl
Transform: hover:scale-105

SECONDARY BUTTON
━━━━━━━━━━━━━━━━
┌─────────────────────────┐
│  Ver Demo Gratis       │  ← White, Border, Bold
└─────────────────────────┘
Padding: px-8 py-4
Border: 2px solid primary
Border Radius: 9999px
```

### Cards
```
STANDARD CARD
┌─────────────────────────┐
│  ┌─┐                   │
│  │■│  Title            │  ← Icon + Title
│  └─┘                   │
│                        │
│  Description text...   │  ← Body text
│                        │
└─────────────────────────┘
Padding: 24px
Border Radius: 16px
Shadow: soft
Background: White
Border: 1px gray-100
```

### Badges
```
SMALL BADGE
┌──────────────┐
│ ⭐ Featured │  ← Icon + Text
└──────────────┘
Padding: 12px 16px
Border Radius: 9999px
Font Size: 14px
Font Weight: 600
```

---

## ✨ Animaciones

### Timing Functions
```
Spring:  type: 'spring', damping: 25, stiffness: 300
Ease:    ease-in-out
Duration: 300ms (quick), 600ms (normal)
```

### Patrones de Animación

**Entrada desde abajo**
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

**Hover en botones**
```typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

**Slide-in lateral**
```typescript
initial={{ x: '100%' }}
animate={{ x: 0 }}
exit={{ x: '100%' }}
```

---

## 🖼️ Imágenes

### Aspect Ratios
```
Hero Image:    1:1 (square)
Feature Image: 16:9 (landscape)
Testimonial:   4:3 (portrait)
```

### Optimización
```
Format: WebP (fallback JPEG)
Sizes:
  - Mobile:  640px
  - Tablet:  1024px
  - Desktop: 1920px
Quality: 85%
Loading: lazy (except above fold)
```

---

## 📱 Responsive Breakpoints

```
Mobile:    < 640px   (sm)
━━━━━━━━━━━━━━━━━━━━━
- Single column
- Stacked layout
- Larger touch targets
- Simplified navigation

Tablet:    640-1024px (md-lg)
━━━━━━━━━━━━━━━━━━━━━━━━━━
- 2 columns
- Mixed layouts
- Regular spacing

Desktop:   > 1024px (xl)
━━━━━━━━━━━━━━━━━━━━━
- 3-6 columns
- Full features
- Optimal spacing
```

---

## 🎯 Psicología del Color Aplicada

```
NARANJA (Primary)
→ Acción, Energía, Urgencia
→ Usado en: CTAs, Precios, Descuentos

AZUL (Trust)
→ Confianza, Seguridad, Profesionalismo
→ Usado en: Garantía, Badges de seguridad

VERDE (Success)
→ Éxito, Logro, Aprobación
→ Usado en: Checks, Testimonios, Garantías

GRIS
→ Neutral, Profesional, Legible
→ Usado en: Texto, Backgrounds sutiles
```

---

## 📊 Métricas de Diseño

### Performance Goals
```
First Contentful Paint:  < 1.5s
Largest Contentful Paint: < 2.5s
Cumulative Layout Shift:  < 0.1
Time to Interactive:      < 3.5s
```

### Accessibility
```
Contrast Ratio:    > 4.5:1 (text)
Touch Targets:     > 44x44px
Font Size:         > 16px (body)
Focus Indicators:  Visible
```

---

**Sistema de diseño construido para conversión máxima y experiencia óptima.**

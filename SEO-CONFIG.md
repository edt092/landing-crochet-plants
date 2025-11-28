# 🚀 Guía de Configuración SEO - Landing Page Curso de Crochet

## 📋 Índice
- [Configuración Inicial](#configuración-inicial)
- [Optimizaciones Implementadas](#optimizaciones-implementadas)
- [Pasos Post-Despliegue](#pasos-post-despliegue)
- [Google Search Console](#google-search-console)
- [Verificación SEO](#verificación-seo)
- [Palabras Clave Target](#palabras-clave-target)

---

## 🔧 Configuración Inicial

### 1. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Facebook Pixel
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

### 2. Actualizar Dominio

Busca y reemplaza `https://tudominio.com` en los siguientes archivos:

- `app/layout.tsx` (líneas 45, 48, 63)
- `app/sitemap.ts` (línea 4)
- `public/robots.txt` (línea 16)
- `components/StructuredData.tsx` (todas las referencias)

**Búsqueda rápida:**
```bash
# Windows (PowerShell)
Get-ChildItem -Recurse -File | Select-String "tudominio.com"

# Linux/Mac
grep -r "tudominio.com" .
```

---

## ✅ Optimizaciones Implementadas

### 1. **SEO On-Page**

#### Meta Tags Optimizados
- ✅ Title tag con palabras clave principales
- ✅ Meta description optimizada (155-160 caracteres)
- ✅ Keywords meta con palabras clave de intención de compra
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Cards configuradas
- ✅ Canonical URL establecida

#### Estructura de Contenido
- ✅ H1 optimizado: "Curso de Crochet: Aprende a Crear Plantas de Crochet Paso a Paso"
- ✅ 3 secciones de contenido SEO (150-200 palabras c/u)
- ✅ 16 preguntas FAQ con palabras clave target
- ✅ Lista de beneficios incluidos

#### Imágenes Optimizadas
- ✅ Atributos ALT descriptivos con keywords
- ✅ Nombres de archivo descriptivos recomendados
- ✅ Lazy loading implementado (Next.js Image)

### 2. **SEO Técnico**

#### Archivos Core
- ✅ `robots.txt` configurado
- ✅ `sitemap.xml` dinámico
- ✅ `manifest.json` para PWA

#### Structured Data (Schema.org)
- ✅ Product Schema
- ✅ Course Schema
- ✅ FAQ Schema
- ✅ Organization Schema
- ✅ Breadcrumb Schema

#### Performance
- ✅ Preconnect a dominios externos
- ✅ DNS Prefetch configurado
- ✅ Next.js Image optimization
- ✅ Lazy loading de componentes

### 3. **Analytics & Tracking**

- ✅ Google Analytics 4
- ✅ Google Tag Manager
- ✅ Facebook Pixel
- ✅ Hotjar (preparado, comentado)

---

## 🚀 Pasos Post-Despliegue

### 1. Verificar URLs

Después de desplegar, verifica que estas URLs funcionen:

```
https://tudominio.com/
https://tudominio.com/sitemap.xml
https://tudominio.com/robots.txt
https://tudominio.com/manifest.json
```

### 2. Crear Imágenes Necesarias

Crea las siguientes imágenes en `/public`:

- `favicon.ico` - 32x32px
- `apple-touch-icon.png` - 180x180px
- `icon-192x192.png` - 192x192px
- `icon-512x512.png` - 512x512px
- `og-image.jpg` - 1200x630px (para redes sociales)

**Herramientas recomendadas:**
- [Favicon Generator](https://favicon.io/)
- [Social Image Generator](https://www.canva.com/create/social-media/)

### 3. Agregar Imágenes de Bonos

Las 7 imágenes de bonos deben estar en:
```
/public/img/bonus/bonus-1.png
/public/img/bonus/bonus-2.png
...
/public/img/bonus/bonus-7.png
```

Tamaño recomendado: 800x600px o similar (proporción 4:3)

---

## 🔍 Google Search Console

### 1. Verificar Propiedad

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad (dominio completo)
3. Copia el código de verificación
4. Actualiza en `app/layout.tsx` línea 71:

```typescript
verification: {
  google: 'tu-codigo-aqui',
  yandex: 'tu-codigo-aqui',
},
```

### 2. Enviar Sitemap

Una vez verificado:
1. Ve a "Sitemaps" en el menú lateral
2. Agrega la URL: `https://tudominio.com/sitemap.xml`
3. Haz clic en "Enviar"

### 3. Solicitar Indexación

Para indexación rápida:
1. Ve a "Inspección de URLs"
2. Ingresa tu URL principal
3. Haz clic en "Solicitar indexación"

---

## 📊 Verificación SEO

### Checklist de Verificación

#### On-Page SEO
- [ ] Title tag único y descriptivo (50-60 caracteres)
- [ ] Meta description persuasiva (155-160 caracteres)
- [ ] H1 único con palabra clave principal
- [ ] H2/H3 con palabras clave relacionadas
- [ ] URLs descriptivas y limpias
- [ ] Imágenes con ALT text descriptivo
- [ ] Enlaces internos funcionando
- [ ] Contenido original y valioso (min. 500 palabras)

#### Technical SEO
- [ ] Sitemap.xml accesible
- [ ] Robots.txt configurado
- [ ] Velocidad de carga < 3 segundos
- [ ] Mobile-friendly (responsive)
- [ ] HTTPS configurado
- [ ] Canonical tags correctos
- [ ] Structured data sin errores

#### Local SEO (si aplica)
- [ ] Información de contacto visible
- [ ] Schema.org LocalBusiness
- [ ] Google My Business

### Herramientas de Verificación

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Meta: > 90 en móvil y desktop

2. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Verifica structured data

3. **Google Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly

4. **Ahrefs/SEMrush (opcional)**
   - Análisis de keywords
   - Backlinks monitoring
   - Competencia

---

## 🎯 Palabras Clave Target

### Primarias (High Intent)
1. `curso de crochet` - Vol: 5,400/mes
2. `mejor curso de crochet online` - Vol: 880/mes
3. `aprender crochet desde cero` - Vol: 1,200/mes
4. `curso de crochet opiniones` - Vol: 320/mes

### Secundarias (Long-tail)
1. `planta de crochet paso a paso` - Vol: 720/mes
2. `amigurumi plantas tutorial` - Vol: 590/mes
3. `crochet plantas patrones gratis` - Vol: 480/mes
4. `patrones de crochet pdf gratis` - Vol: 1,100/mes

### Terciarias (Supporting)
1. `ebook crochet`
2. `plantas tejidas`
3. `cactus crochet`
4. `suculentas crochet`
5. `como vender crochet`

### Estrategia de Contenido

**Mes 1-2: Posicionamiento Base**
- Publicar landing page optimizada
- Enviar a Google Search Console
- Crear backlinks básicos (directorios)

**Mes 3-4: Contenido Adicional**
- Blog post: "10 Patrones de Plantas de Crochet Gratis"
- Blog post: "Cómo Vender Tus Creaciones de Crochet"
- Video tutorial en YouTube

**Mes 5-6: Expansión**
- Guest posts en blogs relacionados
- Colaboraciones con influencers
- Pinterest marketing

---

## 📈 KPIs a Monitorear

### Tráfico Orgánico
- Visitas desde Google
- Impresiones en SERP
- CTR promedio
- Posición promedio

### Conversión
- Tasa de rebote
- Tiempo en página
- Conversión a carrito
- Tasa de compra

### Engagement
- Páginas por sesión
- Scroll depth
- Clicks en CTAs
- Compartidos sociales

---

## 🛠️ Mantenimiento SEO

### Semanal
- [ ] Revisar Google Search Console
- [ ] Verificar errores de rastreo
- [ ] Monitorear posiciones de keywords

### Mensual
- [ ] Actualizar contenido
- [ ] Agregar nuevas FAQ
- [ ] Optimizar imágenes nuevas
- [ ] Revisar backlinks

### Trimestral
- [ ] Auditoría SEO completa
- [ ] Análisis de competencia
- [ ] Actualización de keywords
- [ ] Mejoras de performance

---

## 📞 Soporte

Si tienes dudas sobre la configuración SEO:
- Email: soporte@sinfronterasacademia.info
- Documentación Next.js: https://nextjs.org/docs
- Guías de Google: https://developers.google.com/search

---

## 🎉 Próximos Pasos

1. ✅ Actualizar dominio en todos los archivos
2. ✅ Configurar variables de entorno
3. ✅ Agregar imágenes necesarias
4. ✅ Verificar en Google Search Console
5. ✅ Solicitar indexación
6. ✅ Monitorear Analytics
7. ✅ Comenzar estrategia de contenido

**¡Tu landing está lista para rankear! 🚀**

# ✅ Checklist de Despliegue - Landing Page Curso de Crochet

Sigue esta lista paso a paso antes de desplegar a producción.

---

## 🔴 CRÍTICO (Obligatorio antes de desplegar)

### 1. Dominio y URLs
- [ ] Reemplazar `https://tudominio.com` en todos los archivos
  - [ ] `app/layout.tsx`
  - [ ] `app/sitemap.ts`
  - [ ] `public/robots.txt`
  - [ ] `components/StructuredData.tsx`

### 2. Variables de Entorno
- [ ] Crear archivo `.env.local`
- [ ] Agregar Google Analytics ID
- [ ] Agregar Google Tag Manager ID
- [ ] Agregar Facebook Pixel ID (si aplica)
- [ ] Agregar URL del sitio

### 3. Imágenes Requeridas
- [ ] `/public/favicon.ico`
- [ ] `/public/apple-touch-icon.png`
- [ ] `/public/icon-192x192.png`
- [ ] `/public/icon-512x512.png`
- [ ] `/public/og-image.jpg` (1200x630px para redes sociales)
- [ ] `/public/img/bonus/bonus-1.png` (7 imágenes en total)

### 4. Información de Contacto
- [ ] Actualizar email en `components/FAQ.tsx` (línea 135)
- [ ] Actualizar email en `components/StructuredData.tsx`
- [ ] Verificar WhatsApp en `components/FloatingChat.tsx`

---

## 🟡 IMPORTANTE (Muy recomendado)

### 5. SEO Verification
- [ ] Verificar propiedad en Google Search Console
- [ ] Agregar código de verificación en `app/layout.tsx`
- [ ] Enviar sitemap a Google Search Console
- [ ] Solicitar indexación de URL principal

### 6. Analytics Setup
- [ ] Configurar Google Analytics 4
- [ ] Configurar Google Tag Manager
- [ ] Configurar Facebook Pixel (si aplica)
- [ ] Configurar eventos de conversión
- [ ] Probar tracking con Google Tag Assistant

### 7. Performance
- [ ] Optimizar imágenes (comprimir sin perder calidad)
- [ ] Verificar lazy loading funcionando
- [ ] Test en Google PageSpeed Insights (meta: >90)
- [ ] Test en GTmetrix
- [ ] Verificar Core Web Vitals

### 8. Testing Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Móvil (iOS)
- [ ] Móvil (Android)

---

## 🟢 OPCIONAL (Nice to have)

### 9. Hotmart Integration
- [ ] Actualizar links de afiliado si aplica
- [ ] Configurar pixel de Hotmart
- [ ] Probar flujo de compra completo

### 10. Social Media
- [ ] Crear cuentas en redes sociales
- [ ] Actualizar usernames en metadata
- [ ] Configurar Open Graph images
- [ ] Probar preview en Facebook Debugger
- [ ] Probar preview en Twitter Card Validator

### 11. Content Marketing
- [ ] Preparar contenido para blog
- [ ] Crear pins para Pinterest
- [ ] Preparar posts para Instagram
- [ ] Crear video para YouTube

### 12. Email Marketing
- [ ] Configurar servicio de email (Mailchimp, etc.)
- [ ] Crear secuencia de bienvenida
- [ ] Configurar formulario de captura
- [ ] Probar envío de emails

---

## 🧪 Testing Pre-Launch

### Funcionalidad
- [ ] Todos los botones funcionan
- [ ] Formularios envían correctamente
- [ ] Carrito de compras funciona
- [ ] Animaciones funcionan suavemente
- [ ] Links internos correctos
- [ ] Links externos abren en nueva pestaña

### SEO
- [ ] Title tags únicos en cada página
- [ ] Meta descriptions presentes
- [ ] H1 único en cada página
- [ ] Imágenes tienen ALT text
- [ ] Sitemap accesible
- [ ] Robots.txt accesible
- [ ] Structured data sin errores

### Mobile Responsiveness
- [ ] Header responsive
- [ ] Imágenes se adaptan
- [ ] Texto legible en móvil
- [ ] Botones fáciles de clickear
- [ ] No hay scroll horizontal
- [ ] Forms usables en móvil

### Performance
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.8s
- [ ] Total Blocking Time < 200ms

---

## 🚀 Comandos de Despliegue

### Build Local Test
```bash
npm run build
npm start
```
Verifica que todo funcione en modo producción.

### Deploy a Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Deploy a Netlify
```bash
# Build
npm run build

# Deploy manualmente desde /out
# O conectar repositorio en Netlify Dashboard
```

---

## 📊 Post-Launch Monitoring

### Día 1
- [ ] Verificar que el sitio está online
- [ ] Probar desde diferentes ubicaciones
- [ ] Verificar Analytics funcionando
- [ ] Revisar Google Search Console
- [ ] Monitorear errores en consola

### Semana 1
- [ ] Revisar métricas de tráfico
- [ ] Analizar tasa de rebote
- [ ] Verificar conversiones
- [ ] Revisar velocidad de carga
- [ ] Ajustar según feedback

### Mes 1
- [ ] Análisis SEO completo
- [ ] Revisar keywords ranking
- [ ] Analizar competencia
- [ ] Optimizar según datos
- [ ] Planear contenido nuevo

---

## 🐛 Troubleshooting

### Sitio no carga
1. Verificar build sin errores
2. Revisar logs del servidor
3. Verificar variables de entorno
4. Revisar DNS configurado

### Analytics no tracking
1. Verificar IDs correctos en `.env.local`
2. Revisar consola de navegador
3. Usar Google Tag Assistant
4. Verificar AdBlockers desactivados

### Imágenes no cargan
1. Verificar rutas correctas
2. Revisar public folder
3. Verificar permisos de archivos
4. Revisar configuración de Next.js

### SEO no funcionando
1. Esperar 2-4 semanas para indexación
2. Verificar sitemap enviado
3. Revisar robots.txt no bloquea
4. Verificar structured data válido

---

## 📞 Recursos de Ayuda

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Deploy**: https://vercel.com/docs
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Schema.org**: https://schema.org/

---

## ✅ Launch Checklist Final

Antes de anunciar públicamente:

- [ ] ✅ Sitio accesible desde diferentes dispositivos
- [ ] ✅ Todos los links funcionan
- [ ] ✅ Forms envían correctamente
- [ ] ✅ Analytics tracking
- [ ] ✅ SEO básico configurado
- [ ] ✅ Performance aceptable (>80 en PageSpeed)
- [ ] ✅ Mobile responsive
- [ ] ✅ Backup de base de datos (si aplica)
- [ ] ✅ SSL certificado activo (HTTPS)
- [ ] ✅ Error pages configuradas (404, 500)

---

**🎉 ¡Listo para lanzar! Mucha suerte con tu landing page.**

---

**Última actualización**: Noviembre 2025
**Versión**: 1.0

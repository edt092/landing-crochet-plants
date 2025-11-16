# 🚀 Guía de Configuración Rápida

## Paso 1: Instalar Dependencias

Abre tu terminal en la carpeta del proyecto y ejecuta:

\`\`\`bash
npm install
\`\`\`

Esto instalará todas las dependencias necesarias:
- Next.js 14
- React 18
- TailwindCSS 3.4
- Framer Motion 11
- Zustand 4.5
- Lucide React (iconos)
- React Hot Toast

## Paso 2: Ejecutar en Desarrollo

\`\`\`bash
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Paso 3: Verificar Funcionalidades

### ✅ Chat Flotante
- Debe aparecer el botón naranja en la esquina inferior derecha
- El chat se abre automáticamente después de 3 segundos
- Prueba enviar mensajes con palabras clave: "precio", "curso", "garantia"

### ✅ Carrito de Compras
- Click en el botón "Carrito" en el navbar
- Agrega productos desde los botones "Comenzar Ahora"
- Verifica que se actualice el contador
- Prueba el botón "Proceder al Pago Seguro" (redirige a Hotmart)

### ✅ Navegación
- Verifica que los links del navbar funcionen
- Scroll suave entre secciones
- Animaciones al hacer scroll

### ✅ Responsive
- Prueba en diferentes tamaños de pantalla
- Verifica mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## Paso 4: Personalizar

### Cambiar URL de Hotmart

Busca y reemplaza en estos archivos:
- `components/ShoppingCart.tsx` (línea ~9)
- Busca: `HOTMART_CHECKOUT_URL`

### Modificar Precios

Busca `mainProduct` en:
- `components/Hero.tsx`
- `components/ProblemSolution.tsx`
- `components/Guarantee.tsx`

### Actualizar Imágenes

Edita `lib/imageLoader.ts` para agregar/modificar imágenes.

### Cambiar Colores

Edita `tailwind.config.ts` en la sección `colors`.

## Paso 5: Build para Producción

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Checklist Pre-Deploy

- [ ] Actualizar URL de Hotmart con tu link real
- [ ] Verificar precios del producto
- [ ] Cambiar email de soporte en Footer y FAQ
- [ ] Agregar Google Analytics (opcional)
- [ ] Agregar Meta Pixel (opcional)
- [ ] Probar en dispositivos reales
- [ ] Verificar todas las imágenes cargan correctamente
- [ ] Configurar dominio personalizado

## 📊 Métricas de Conversión

Monitorea estos KPIs:
- **CTR del Hero**: Clicks en "Comenzar Ahora" / Visitantes
- **Tasa de Abandono de Carrito**: Carritos creados / Compras completadas
- **Engagement del Chat**: Mensajes enviados / Visitantes
- **Scroll Depth**: Cuántos llegan a cada sección
- **Tiempo en Página**: Ideal > 3 minutos
- **Conversión General**: Ventas / Visitantes únicos

## 🐛 Troubleshooting

### El chat no aparece
- Verifica que `/public/img/angie.jfif` existe
- Revisa la consola del navegador para errores

### Las imágenes no cargan
- Verifica que el archivo `curl/pagina.html` existe
- Las URLs en `lib/imageLoader.ts` son válidas
- Next.js Image requiere configuración en `next.config.js`

### Error de compilación TypeScript
- Ejecuta: `npm install --save-dev @types/node @types/react @types/react-dom`
- Verifica que `tsconfig.json` existe

### Animaciones lentas
- Reduce la complejidad en `framer-motion`
- Considera lazy loading para secciones debajo del fold

## 💡 Tips de Optimización

1. **Performance**
   - Usa Next.js Image para todas las imágenes
   - Implementa lazy loading en secciones no críticas
   - Minimiza el bundle size

2. **SEO**
   - Agrega meta tags en `app/layout.tsx`
   - Usa semantic HTML
   - Genera sitemap.xml

3. **Conversión**
   - Test A/B en headlines
   - Prueba diferentes CTAs
   - Optimiza el copy basado en data

4. **UX**
   - Mantén tiempo de carga < 3s
   - Optimiza para Core Web Vitals
   - Prueba en conexiones lentas

## 🚀 Deploy Rápido con Vercel

1. Push el proyecto a GitHub
2. Conecta el repo en [vercel.com](https://vercel.com)
3. Deploy automático
4. Configura dominio personalizado

¡Listo! Tu landing page está lista para convertir 🎉

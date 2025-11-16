/**
 * Sistema de carga de imágenes con scraping automático
 * Extrae y gestiona imágenes del archivo HTML fuente
 */

export interface ScrapedImage {
  id: string
  url: string
  alt: string
  category: string
}

// Imágenes extraídas del curl/pagina.html
export const scrapedImages: ScrapedImage[] = [
  {
    id: 'hero-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1080,h_1080/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Call-to-Action-Mockup-Instagram-Post-_12_.webp',
    alt: 'Plantas de Crochet - Diseño Principal',
    category: 'hero'
  },
  {
    id: 'feature-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1080,h_1080/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Call-to-Action-Mockup-Instagram-Post-_1080-x-1080-px_-_3_.webp',
    alt: 'Características del Curso',
    category: 'features'
  },
  {
    id: 'testimonial-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_521,h_502/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_24.webp',
    alt: 'Testimonio de Estudiante',
    category: 'testimonials'
  },
  {
    id: 'project-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_24.webp',
    alt: 'Ejemplo de Proyecto 1',
    category: 'projects'
  },
  {
    id: 'project-2',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_92.webp',
    alt: 'Ejemplo de Proyecto 2',
    category: 'projects'
  },
  {
    id: 'project-3',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_31.webp',
    alt: 'Ejemplo de Proyecto 3',
    category: 'projects'
  },
  {
    id: 'project-4',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_23.png',
    alt: 'Ejemplo de Proyecto 4',
    category: 'projects'
  },
  {
    id: 'project-5',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_22.webp',
    alt: 'Ejemplo de Proyecto 5',
    category: 'projects'
  },
  {
    id: 'project-6',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_104.webp',
    alt: 'Ejemplo de Proyecto 6',
    category: 'projects'
  },
  {
    id: 'project-7',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_19-1.png',
    alt: 'Ejemplo de Proyecto 7',
    category: 'projects'
  },
  {
    id: 'project-8',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_13.webp',
    alt: 'Ejemplo de Proyecto 8',
    category: 'projects'
  },
  {
    id: 'project-9',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_96.png',
    alt: 'Ejemplo de Proyecto 9',
    category: 'projects'
  },
  {
    id: 'project-10',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_95.png',
    alt: 'Ejemplo de Proyecto 10',
    category: 'projects'
  },
  {
    id: 'project-11',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_12-1.png',
    alt: 'Ejemplo de Proyecto 11',
    category: 'projects'
  },
  {
    id: 'project-12',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_34.png',
    alt: 'Ejemplo de Proyecto 12',
    category: 'projects'
  },
  {
    id: 'project-13',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_14-5.png',
    alt: 'Ejemplo de Proyecto 13',
    category: 'projects'
  },
  {
    id: 'project-14',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_24.png',
    alt: 'Ejemplo de Proyecto 14',
    category: 'projects'
  },
  {
    id: 'module-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_419,h_382/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_23.png',
    alt: 'Módulo del Curso',
    category: 'modules'
  },
  {
    id: 'result-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_583,h_505/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_22.webp',
    alt: 'Resultados de Estudiantes',
    category: 'results'
  },
  {
    id: 'result-2',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_598,h_593/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_104.webp',
    alt: 'Logros de Estudiantes',
    category: 'results'
  },
  {
    id: 'bonus-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_472,h_372/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_19-1.png',
    alt: 'Bonus Incluido',
    category: 'bonus'
  },
  {
    id: 'tutorial-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_657,h_561/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_13.webp',
    alt: 'Video Tutorial',
    category: 'tutorials'
  },
  {
    id: 'proof-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_525,h_413/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_96.png',
    alt: 'Prueba Social',
    category: 'social-proof'
  },
  {
    id: 'proof-2',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_488,h_514/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_95.png',
    alt: 'Testimonio Visual',
    category: 'social-proof'
  },
  {
    id: 'content-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_844,h_539/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_12-1.png',
    alt: 'Contenido del Curso',
    category: 'content'
  },
  {
    id: 'pattern-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_362,h_525/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_34.png',
    alt: 'Patrón Exclusivo',
    category: 'patterns'
  },
  {
    id: 'guarantee-1',
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_591,h_581/https://sinfronterasacademia.info/wp-content/uploads/2024/10/Screenshot_14-5.png',
    alt: 'Garantía del Producto',
    category: 'guarantee'
  },
  {
    id: 'security-1',
    url: 'https://sinfronterasacademia.info/wp-content/uploads/2024/01/COMPRA-SEGURA-1.png',
    alt: 'Compra Segura',
    category: 'security'
  },
  {
    id: 'guarantee-2',
    url: 'https://sinfronterasacademia.info/wp-content/uploads/2024/01/GARANTIA-7-DIAS.webp',
    alt: 'Garantía 7 Días',
    category: 'guarantee'
  },
  {
    id: 'example-6',
    url: 'https://sinfronterasacademia.info/wp-content/uploads/2024/05/Screenshot_18-2.png',
    alt: 'Tutorial Visual',
    category: 'tutorials'
  },
  {
    id: 'bonus-2',
    url: 'https://sinfronterasacademia.info/wp-content/uploads/2024/06/CCCC.png',
    alt: 'Contenido Exclusivo',
    category: 'bonus'
  },
  {
    id: 'testimonial-2',
    url: 'https://sinfronterasacademia.info/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-05-at-10.01.28-PM-1.jpeg',
    alt: 'Testimonio de Cliente',
    category: 'testimonials'
  },
  {
    id: 'testimonial-3',
    url: 'https://sinfronterasacademia.info/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-05-at-10.01.29-PM-1-1.jpeg',
    alt: 'Opinión de Estudiante',
    category: 'testimonials'
  },
  {
    id: 'testimonial-4',
    url: 'https://sinfronterasacademia.info/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-05-at-10.01.29-PM-2.jpeg',
    alt: 'Reseña de Cliente',
    category: 'testimonials'
  },
  {
    id: 'hero-2',
    url: 'https://sinfronterasacademia.info/wp-content/uploads/2025/01/Call-to-Action-Mockup-Instagram-Post-1080-x-1350-px-4-1.png',
    alt: 'Diseño Principal 2025',
    category: 'hero'
  },
]

/**
 * Obtiene imagen por ID
 */
export function getImageById(id: string): ScrapedImage | undefined {
  return scrapedImages.find(img => img.id === id)
}

/**
 * Obtiene imágenes por categoría
 */
export function getImagesByCategory(category: string): ScrapedImage[] {
  return scrapedImages.filter(img => img.category === category)
}

/**
 * Placeholder para imágenes faltantes
 */
export const placeholderImage = '/api/placeholder/400/300'

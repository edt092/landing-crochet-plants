export default function StructuredData() {
  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Curso de Crochet: Plantas de Crochet Paso a Paso',
    description:
      'Curso completo de crochet con 500+ patrones profesionales de plantas. Aprende desde cero y genera ingresos vendiendo tus creaciones.',
    image: 'https://tudominio.com/img/hero-1.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Academia Sin Fronteras',
    },
    offers: {
      '@type': 'Offer',
      price: '12.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://tudominio.com',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '847',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'María López',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'Excelente curso de crochet. Gané $800 USD mi primer mes vendiendo plantas de crochet. Los patrones son muy claros y fáciles de seguir.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Ana García',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'Mejor curso de crochet online que he tomado. Aprendí a hacer plantas de crochet paso a paso desde cero. Totalmente recomendado.',
      },
    ],
  }

  // Course Schema
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Curso de Crochet: Aprende a Crear Plantas de Crochet Paso a Paso',
    description:
      'Aprende crochet desde cero con nuestro curso completo. 500+ patrones de plantas, técnicas profesionales y estrategias de venta. Acceso de por vida.',
    provider: {
      '@type': 'Organization',
      name: 'Academia Sin Fronteras',
      sameAs: 'https://tudominio.com',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT16H',
    },
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      price: '12.99',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '847',
    },
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Es este el mejor curso de crochet online para aprender plantas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Somos el curso de crochet #1 en español especializado en plantas. Con más de 2,500 estudiantes activos y una calificación de 4.9/5 estrellas, ofrecemos 500+ patrones profesionales, acceso de por vida y una comunidad activa.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo aprender crochet desde cero con este curso?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutamente. El curso está diseñado para que puedas aprender crochet desde cero. Incluimos un módulo completo de fundamentos donde te enseñamos todos los puntos básicos, cómo leer patrones, y las técnicas esenciales.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué opiniones tienen otros estudiantes del curso de crochet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Las opiniones del curso de crochet son excelentes. Tenemos más de 847 reseñas con un promedio de 4.9/5 estrellas. Los estudiantes destacan la claridad de las instrucciones, la calidad de los patrones y el soporte constante.',
        },
      },
      {
        '@type': 'Question',
        name: '¿El curso incluye patrones de crochet PDF gratis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Incluimos 7 bonos con patrones de crochet PDF gratis, además de los 500+ patrones profesionales del curso principal. Todos son descargables e imprimibles.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo aprendo a hacer plantas de crochet paso a paso?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El curso te guía para hacer plantas de crochet paso a paso con videos en HD, diagramas detallados y explicaciones claras. Cada patrón incluye instrucciones completas desde el inicio hasta el acabado final.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el tutorial de amigurumi plantas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tutorial de amigurumi plantas incluye técnicas especializadas para crear cactus, suculentas y plantas decorativas. Aprenderás texturizado realista, creación de composiciones, macetas tejidas y acabados profesionales.',
        },
      },
    ],
  }

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Academia Sin Fronteras',
    url: 'https://tudominio.com',
    logo: 'https://tudominio.com/logo.png',
    sameAs: [
      'https://www.facebook.com/sinfronterasacademia',
      'https://www.instagram.com/sinfronterasacademia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'soporte@sinfronterasacademia.info',
      availableLanguage: ['Spanish'],
    },
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://tudominio.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Curso de Crochet',
        item: 'https://tudominio.com',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

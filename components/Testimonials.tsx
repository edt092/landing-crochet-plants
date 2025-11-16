'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { getImagesByCategory } from '@/lib/imageLoader'
import { getAvatarByName } from '@/lib/avatarGenerator'

const testimonials = [
  {
    name: 'María González',
    location: 'Bogotá, Colombia',
    avatar: '1',
    rating: 5,
    text: 'En solo 2 meses recuperé mi inversión y ahora genero entre $800-$1,200 USD mensuales vendiendo plantas de crochet. Los patrones son clarísimos y las estrategias de venta realmente funcionan.',
    result: 'Ganó $800 USD el primer mes',
  },
  {
    name: 'Laura Martínez',
    location: 'Madrid, España',
    avatar: '2',
    rating: 5,
    text: 'Llevaba años tejiendo por hobby pero nunca me había atrevido a vender. Este curso me dio la confianza y las herramientas. Ahora tengo una tienda en Etsy con más de 200 ventas.',
    result: '+200 ventas en Etsy',
  },
  {
    name: 'Ana Rodríguez',
    location: 'Ciudad de México',
    avatar: '3',
    rating: 5,
    text: 'La calidad de los videos y la comunidad son increíbles. Cada vez que tengo una duda, hay alguien dispuesto a ayudar. Mis plantas ahora se ven profesionales y mis clientes lo notan.',
    result: 'Triplicó sus precios',
  },
  {
    name: 'Carmen López',
    location: 'Buenos Aires, Argentina',
    avatar: '4',
    rating: 5,
    text: 'Invertí en este curso cuando estaba buscando un ingreso extra. Hoy es mi trabajo principal. Las técnicas que enseñan marcan la diferencia entre algo bonito y algo que la gente NECESITA comprar.',
    result: 'Dejó su trabajo tradicional',
  },
  {
    name: 'Sofia Ramírez',
    location: 'Lima, Perú',
    avatar: '5',
    rating: 5,
    text: 'Los bonos valen más que el curso mismo. Las plantillas para redes sociales me ahorraron horas de trabajo y la masterclass de marketing me ayudó a duplicar mis ventas en Instagram.',
    result: 'Duplicó ventas en IG',
  },
  {
    name: 'Isabel Torres',
    location: 'Santiago, Chile',
    avatar: '6',
    rating: 5,
    text: 'Compré varios cursos antes pero este es el único que realmente me llevó de cero a ventas. La estructura es perfecta: aprendes la técnica y luego cómo monetizarla. ¡Debí comprarlo antes!',
    result: 'Primera venta en 5 días',
  },
]

export default function Testimonials() {
  const testimonialImages = getImagesByCategory('social-proof')
  const realTestimonials = getImagesByCategory('testimonials')

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge bg-success-100 text-success-700 mb-4">
            Historias de Éxito
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            Más de 2,500 Estudiantes{' '}
            <span className="text-primary-600">Ya lo Lograron</span>
          </h2>
          <p className="text-xl text-gray-600">
            Lee lo que dicen quienes ya transformaron su pasión en un negocio rentable
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '2,547', label: 'Estudiantes activos' },
            { number: '4.9/5', label: 'Calificación promedio' },
            { number: '92%', label: 'Tasa de éxito' },
            { number: '847', label: 'Reseñas 5 estrellas' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card relative"
            >
              <Quote className="absolute top-6 right-6 text-primary-200" size={40} />

              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-primary-200">
                  <Image
                    src={getAvatarByName(testimonial.name)}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              {/* Result Badge */}
              <div className="mt-4 bg-success-50 text-success-700 px-4 py-2 rounded-lg text-sm font-medium text-center">
                ✨ {testimonial.result}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Testimonials from WhatsApp */}
        {realTestimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Testimonios Reales de Nuestros Estudiantes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {realTestimonials.map((img, i) => (
                <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Social Proof Images */}
        {testimonialImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            {testimonialImages.slice(0, 2).map((img, i) => (
              <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

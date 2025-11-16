'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, BookOpen, Video, Download } from 'lucide-react'
import Image from 'next/image'
import { getImagesByCategory } from '@/lib/imageLoader'

const benefits = [
  {
    icon: Target,
    title: 'Técnicas Profesionales',
    description: 'Domina puntos avanzados y acabados perfectos que hacen la diferencia entre aficionado y profesional',
    color: 'primary',
  },
  {
    icon: TrendingUp,
    title: 'Estrategias de Venta',
    description: 'Aprende a fijar precios rentables, fotografiar tus productos y vender en Instagram, Etsy y más',
    color: 'trust',
  },
  {
    icon: Users,
    title: 'Comunidad Exclusiva',
    description: 'Accede a nuestro grupo privado con miles de emprendedores que te apoyarán en tu camino',
    color: 'success',
  },
  {
    icon: BookOpen,
    title: 'Patrones Exclusivos',
    description: '50+ patrones profesionales de plantas, cactus y suculentas que no encontrarás en otro lugar',
    color: 'primary',
  },
  {
    icon: Video,
    title: 'Videos HD Paso a Paso',
    description: 'Más de 80 lecciones en video de alta calidad, filmadas desde todos los ángulos',
    color: 'trust',
  },
  {
    icon: Download,
    title: 'Recursos Descargables',
    description: 'PDFs imprimibles, calculadoras de precio, plantillas para redes sociales y mucho más',
    color: 'success',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-100',
    text: 'text-primary-600',
    border: 'border-primary-200',
  },
  trust: {
    bg: 'bg-trust-100',
    text: 'text-trust-600',
    border: 'border-trust-200',
  },
  success: {
    bg: 'bg-success-100',
    text: 'text-success-600',
    border: 'border-success-200',
  },
}

export default function Benefits() {
  const featureImages = getImagesByCategory('features')
  const projectImages = getImagesByCategory('projects')

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
          <span className="badge bg-primary-100 text-primary-700 mb-4">
            ¿Qué Incluye?
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            Todo lo Que Necesitas Para{' '}
            <span className="text-primary-600">Tener Éxito</span>
          </h2>
          <p className="text-xl text-gray-600">
            Un sistema completo diseñado para llevarte de principiante a experto vendedor
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`card border ${colors.border}`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className={colors.text} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Visual Showcase */}
        {featureImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary-50 to-trust-50 rounded-3xl p-8 lg:p-12"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Aprende Haciendo
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Cada lección está diseñada para que practiques inmediatamente.
                No solo teoría, sino proyectos reales que podrás vender.
              </p>
              <ul className="space-y-3">
                {[
                  'Videos en HD desde múltiples ángulos',
                  'Explicaciones detalladas de cada punto',
                  'Trucos profesionales no documentados',
                  'Solución de problemas comunes',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={featureImages[0]?.url || '/img/angie.jfif'}
                alt="Características del ebook"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Project Gallery */}
        {projectImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Ejemplos de Proyectos que Aprenderás a Crear
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {projectImages.slice(0, 8).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

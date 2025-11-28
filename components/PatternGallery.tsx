'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImagesByCategory } from '@/lib/imageLoader'

export default function PatternGallery() {
  const projectImages = getImagesByCategory('projects')
  const tutorialImages = getImagesByCategory('tutorials')
  const allImages = [...projectImages, ...tutorialImages]

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase">
            ¡Teje +500 Flores y Plantas Mágicas
            <br />
            <span className="text-primary-600">Y VENDE todos los días!</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Descubre todos los patrones profesionales que aprenderás a tejer.
            Cada uno diseñado para que puedas vender y generar ingresos desde casa.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allImages.slice(0, 16).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <Image
                src={img.url}
                alt={`Patrón de crochet ${i + 1} - Planta de crochet paso a paso - Tutorial amigurumi plantas`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Y muchos más patrones esperándote...
          </p>
          <p className="text-lg text-gray-600">
            Acceso ilimitado a todos los patrones actuales y futuros
          </p>
        </motion.div>
      </div>
    </section>
  )
}

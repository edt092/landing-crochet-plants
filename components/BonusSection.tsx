'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Gift, Sparkles } from 'lucide-react'

const bonuses = [
  {
    number: 1,
    title: 'Patrón Exclusivo: Rosa Eterna',
    value: '$15.000',
    description: 'Aprende a tejer una rosa perfecta con pétalos realistas que lucirá espectacular',
    image: '/img/bonus/bonus-1.png',
  },
  {
    number: 2,
    title: 'Guía de Fotografía de Producto',
    value: '$25.000',
    description: 'Secretos profesionales para fotografiar tus creaciones y vender más',
    image: '/img/bonus/bonus-2.png',
  },
  {
    number: 3,
    title: 'Plantillas para Redes Sociales',
    value: '$20.000',
    description: '50+ plantillas editables para Instagram, Facebook y Pinterest',
    image: '/img/bonus/bonus-3.png',
  },
  {
    number: 4,
    title: 'Calculadora de Precios',
    value: '$18.000',
    description: 'Herramienta automatizada para calcular tus costos y ganancias',
    image: '/img/bonus/bonus-4.png',
  },
  {
    number: 5,
    title: 'Masterclass de Marketing',
    value: '$35.000',
    description: 'Estrategias comprobadas para vender en Instagram y Facebook',
    image: '/img/bonus/bonus-5.png',
  },
  {
    number: 6,
    title: 'Pack de 100 Patrones Mini',
    value: '$40.000',
    description: 'Colección especial de plantas miniatura perfectas para llaveros y pins',
    image: '/img/bonus/bonus-6.png',
  },
  {
    number: 7,
    title: 'Acceso a Comunidad VIP',
    value: '$30.000',
    description: 'Grupo privado con miles de crocheteras compartiendo tips y ventas',
    image: '/img/bonus/bonus-7.png',
  },
]

export default function BonusSection() {
  const totalBonusValue = bonuses.reduce((acc, bonus) => {
    const value = parseInt(bonus.value.replace('$', '').replace('.', ''))
    return acc + value
  }, 0)

  return (
    <section className="section-spacing bg-gradient-to-b from-success-50 via-white to-success-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-success-100 text-success-700 px-6 py-3 rounded-full mb-6">
            <Gift size={24} />
            <span className="font-bold text-lg uppercase">7 Bonos Exclusivos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            ¡LLÉVATE TODO ESTO{' '}
            <span className="text-success-600">TOTALMENTE GRATIS!</span>
          </h2>

          <div className="inline-block bg-gradient-to-r from-success-600 to-success-700 text-white px-8 py-4 rounded-2xl shadow-xl">
            <p className="text-lg mb-1">Valor Total de los Bonos:</p>
            <p className="text-5xl font-extrabold">
              ${totalBonusValue.toLocaleString('es-CO')}
            </p>
          </div>
        </motion.div>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-success-200 group"
            >
              {/* Bonus Number Badge */}
              <div className="absolute top-4 left-4 z-10 w-14 h-14 bg-gradient-to-br from-success-600 to-success-700 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {bonus.number}
              </div>

              {/* Sparkle Icon */}
              <div className="absolute top-4 right-4 z-10">
                <Sparkles className="text-success-400" size={32} />
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-success-50 to-success-100">
                <Image
                  src={bonus.image}
                  alt={`Bono ${bonus.number}: ${bonus.title} - Curso de crochet - Patrones de crochet PDF gratis`}
                  fill
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 flex-1">
                    {bonus.title}
                  </h3>
                </div>

                <div className="inline-block bg-success-100 text-success-700 px-4 py-2 rounded-lg font-bold mb-3">
                  Valor: {bonus.value}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-4 border-success-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-success-600 to-success-700 text-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            ¡Todo Esto es TUYO Hoy!
          </h3>
          <p className="text-xl mb-2">
            7 Bonos Premium + Ebook Completo + Acceso de Por Vida
          </p>
          <p className="text-2xl font-bold">
            Por Sólo <span className="text-5xl">$12.99</span> USD
          </p>
        </motion.div>
      </div>
    </section>
  )
}

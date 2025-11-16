'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Award, HeadphonesIcon, Zap, Trophy } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    title: 'Garantía Total',
    description: '7 días o tu dinero de vuelta',
  },
  {
    icon: Clock,
    title: 'Acceso Inmediato',
    description: 'Comienza en menos de 2 minutos',
  },
  {
    icon: Award,
    title: 'Certificado',
    description: 'Reconocido internacionalmente',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte 24/7',
    description: 'Te ayudamos cuando lo necesites',
  },
  {
    icon: Zap,
    title: 'Actualizaciones',
    description: 'Contenido nuevo cada mes',
  },
  {
    icon: Trophy,
    title: 'Resultados',
    description: '92% de estudiantes tienen éxito',
  },
]

export default function TrustBadges() {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-3">
                <badge.icon className="text-primary-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

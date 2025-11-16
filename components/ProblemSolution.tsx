'use client'

import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'
import { useCartStore, type Product } from '@/lib/cartStore'
import { getImageById } from '@/lib/imageLoader'
import toast from 'react-hot-toast'

const problems = [
  'No sabes cómo monetizar tu hobby del crochet',
  'Tus creaciones no reciben el reconocimiento que merecen',
  'Los patrones gratuitos son confusos e incompletos',
  'No tienes idea de cómo fijar precios a tus productos',
  'Te da miedo dar el paso de vender online',
  'Inviertes horas pero no ves resultados económicos',
]

const solutions = [
  'Estrategias probadas para vender desde el día 1',
  'Técnicas profesionales que hacen destacar tus piezas',
  'Patrones exclusivos paso a paso ultra-detallados',
  'Calculadora de precios y fórmulas de rentabilidad',
  'Guía completa para vender en redes sociales',
  'Sistema que genera ingresos pasivos recurrentes',
]

const mainProduct: Product = {
  id: 'ebook-plantas-crochet',
  name: 'Ebook Completo de Plantas de Crochet',
  price: 12.99,
  originalPrice: 51.96,
  image: getImageById('hero-1')?.url || '/img/angie.jfif',
  description: 'Acceso completo + Bonos + Garantía de 7 días',
}

export default function ProblemSolution() {
  const { addItem, toggleCart } = useCartStore()

  const handleAddToCart = () => {
    addItem(mainProduct)
    toast.success('¡Producto agregado al carrito!')
    setTimeout(() => toggleCart(), 500)
  }

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg text-gray-900 mb-6">
            ¿Te Identificas con Alguno de{' '}
            <span className="text-primary-600">Estos Problemas?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Si dijiste que sí a cualquiera, este ebook es exactamente lo que necesitas
          </p>
        </motion.div>

        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <X className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Sin Este Ebook
              </h3>
            </div>

            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100"
              >
                <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                <Check className="text-success-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Con Este Ebook</h3>
            </div>

            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-success-50 rounded-xl border border-success-100"
              >
                <Check className="text-success-600 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">{solution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            La Decisión Más Inteligente de Este Año
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Más de 2,500 estudiantes ya transformaron su pasión en un negocio rentable.
            <br />
            <strong>¿Cuándo será tu turno?</strong>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="bg-white text-primary-600 hover:bg-gray-100 font-bold px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
          >
            <span>Sí, Quiero Transformar Mi Vida</span>
            <ArrowRight size={24} />
          </motion.button>
          <p className="text-primary-100 mt-4 text-sm">
            ✅ Garantía de 7 días • 🔒 Pago 100% seguro
          </p>
        </motion.div>
      </div>
    </section>
  )
}

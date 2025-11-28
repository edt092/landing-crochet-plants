'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Clock, TrendingDown } from 'lucide-react'
import { useCartStore, type Product } from '@/lib/cartStore'
import { useGeoLocation, formatPrice } from '@/lib/useGeoLocation'
import { getImageById } from '@/lib/imageLoader'
import toast from 'react-hot-toast'

const mainProduct: Product = {
  id: 'ebook-plantas-crochet',
  name: 'Ebook Completo de Plantas de Crochet',
  price: 12.99,
  originalPrice: 51.96,
  image: getImageById('hero-1')?.url || '/img/angie.jfif',
  description: 'Acceso completo + 7 Bonos + Garantía de 7 días',
}

export default function ValueProposition() {
  const { addItem, toggleCart } = useCartStore()
  const { currency, currency_symbol, locale, loading } = useGeoLocation()

  const handleAddToCart = () => {
    addItem(mainProduct)
    toast.success('¡Producto agregado al carrito!')
    setTimeout(() => toggleCart(), 500)
  }

  return (
    <section className="section-spacing bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold mb-8 shadow-xl"
          >
            <Zap size={24} fill="currentColor" />
            <span className="text-lg uppercase">¡Oferta Por Tiempo Limitado!</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 uppercase leading-tight"
          >
            ¡ACCEDE HOY CON
            <br />
            <span className="text-yellow-300">75% DE DESCUENTO!</span>
          </motion.h2>

          {/* Price Comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-8 border-2 border-white/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              {/* Original Price */}
              <div className="text-center">
                <p className="text-lg mb-2 opacity-80">Precio Normal:</p>
                <div className="relative inline-block">
                  <p className="text-5xl font-bold line-through opacity-60">
                    {loading ? '...' : formatPrice(51.96, currency, currency_symbol, locale)}
                  </p>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-1 bg-red-500 transform -rotate-12" />
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <TrendingDown className="hidden md:block text-yellow-300" size={48} />

              {/* Discounted Price */}
              <div className="text-center">
                <p className="text-lg mb-2 text-yellow-300 font-semibold">¡Tu Precio HOY!</p>
                <p className="text-7xl font-extrabold text-yellow-300 drop-shadow-xl">
                  {loading ? '...' : formatPrice(12.99, currency, currency_symbol, locale)}
                </p>
                <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-xl mt-2 animate-pulse">
                  ¡AHORRA 75%!
                </div>
              </div>
            </div>

            {/* What's Included Summary */}
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-bold mb-2">✅ Ebook Completo</p>
                <p className="text-sm opacity-80">500+ patrones profesionales</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-bold mb-2">✅ 7 Bonos Premium</p>
                <p className="text-sm opacity-80">Valor $183.000 GRATIS</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-bold mb-2">✅ Acceso de Por Vida</p>
                <p className="text-sm opacity-80">Actualización sin costo</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold text-2xl px-12 py-6 rounded-2xl shadow-2xl transition-all duration-300 group inline-flex items-center gap-3 uppercase"
          >
            <span>¡Quiero mi Descuento Ahora!</span>
            <ArrowRight
              size={32}
              className="group-hover:translate-x-2 transition-transform"
            />
          </motion.button>

          {/* Urgency Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-yellow-300"
          >
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span className="font-semibold">Oferta válida por tiempo limitado</span>
            </div>
            <div className="hidden md:block w-1 h-6 bg-yellow-300/30" />
            <div className="flex items-center gap-2">
              <span className="font-semibold">🔒 Compra 100% Segura</span>
            </div>
            <div className="hidden md:block w-1 h-6 bg-yellow-300/30" />
            <div className="flex items-center gap-2">
              <span className="font-semibold">✅ Garantía de 7 Días</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

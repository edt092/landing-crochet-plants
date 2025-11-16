'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { useCartStore, type Product } from '@/lib/cartStore'
import { getImageById } from '@/lib/imageLoader'
import { useGeoLocation, formatPrice, getPriceInfo } from '@/lib/useGeoLocation'
import { getAvatarUrl } from '@/lib/avatarGenerator'
import toast from 'react-hot-toast'

const mainProduct: Product = {
  id: 'ebook-plantas-crochet',
  name: 'Ebook Completo de Plantas de Crochet',
  price: 12.99,
  originalPrice: 51.96,
  image: getImageById('hero-1')?.url || '/img/angie.jfif',
  description: 'Acceso completo + Bonos + Garantía de 7 días',
}

export default function Hero() {
  const { addItem, toggleCart } = useCartStore()
  const { currency, currency_symbol, locale, country_code, loading } = useGeoLocation()

  const handleAddToCart = () => {
    addItem(mainProduct)
    toast.success('¡Producto agregado al carrito!')
    setTimeout(() => toggleCart(), 500)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-trust-50 pt-20 pb-24 lg:pt-28 lg:pb-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-200/30 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 px-4 py-2 rounded-full mb-6"
            >
              <Award size={18} />
              <span className="font-semibold text-sm">Ebook #1 en Español</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="heading-xl text-gray-900 mb-6 text-balance">
              Transforma Tu{' '}
              <span className="text-primary-600 relative">
                Pasión por el Crochet
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 300 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 299 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              en un Negocio Rentable
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Descubre cómo crear hermosas plantas de crochet que enamoran y aprende
              a venderlas generando{' '}
              <strong className="text-primary-600">ingresos desde casa</strong>,
              incluso si nunca has vendido nada antes.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative"
                    >
                      <Image
                        src={getAvatarUrl(i)}
                        alt={`Usuario ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">+2,500</p>
                  <p className="text-sm text-gray-600">Estudiantes activos</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">4.9/5.0</p>
                  <p className="text-sm text-gray-600">+847 reseñas</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="btn-primary group"
              >
                <span>Comenzar Ahora</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group"
              >
                <Play size={20} className="fill-current" />
                <span>Ver Demo Gratis</span>
              </motion.button>
            </div>

            {/* Price indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-baseline gap-3"
            >
              {loading ? (
                <span className="text-4xl font-bold text-primary-600">
                  Cargando...
                </span>
              ) : (
                <>
                  <span className="text-4xl font-bold text-primary-600">
                    {formatPrice(12.99, currency, currency_symbol, locale)}
                  </span>
                  <span className="text-2xl text-gray-400 line-through">
                    {formatPrice(51.96, currency, currency_symbol, locale)}
                  </span>
                  <span className="badge bg-success-100 text-success-700">
                    -75% OFF
                  </span>
                </>
              )}
            </motion.div>

            {/* Precio con impuestos aproximados - TEMPORAL */}
            {!loading && country_code !== 'US' && (() => {
              const priceInfo = getPriceInfo(12.99, country_code, currency, currency_symbol, locale)
              const taxPercentage = Math.round(priceInfo.taxRate * 100)

              // Solo mostrar si hay impuestos significativos (> 5%)
              if (taxPercentage > 5) {
                return (
                  <p className="text-sm text-gray-600 mt-2">
                    💡 Precio aproximado con impuestos ({taxPercentage}%): <strong>{priceInfo.priceWithTaxFormatted}</strong>
                  </p>
                )
              }
              return null
            })()}

            <p className="text-sm text-gray-600 mt-2">
              🔒 Pago único • Acceso de por vida • Garantía de 7 días
            </p>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={getImageById('hero-1')?.url || '/img/angie.jfif'}
                alt="Plantas de Crochet"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                  <Users className="text-success-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">María López</p>
                  <p className="text-sm text-gray-600">
                    &ldquo;Gané $800 USD mi primer mes&rdquo;
                  </p>
                  <div className="flex text-yellow-400 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-primary-600 text-white rounded-2xl shadow-2xl p-6 text-center"
            >
              <p className="text-4xl font-bold">92%</p>
              <p className="text-sm">Tasa de éxito</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

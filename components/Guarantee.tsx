'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { getImageById } from '@/lib/imageLoader'
import { useCartStore, type Product } from '@/lib/cartStore'
import { useGeoLocation, formatPrice } from '@/lib/useGeoLocation'
import toast from 'react-hot-toast'

const mainProduct: Product = {
  id: 'ebook-plantas-crochet',
  name: 'Ebook Completo de Plantas de Crochet',
  price: 12.99,
  originalPrice: 51.96,
  image: getImageById('hero-1')?.url || '/img/angie.jfif',
  description: 'Acceso completo + Bonos + Garantía de 7 días',
}

export default function Guarantee() {
  const { addItem, toggleCart } = useCartStore()
  const { currency, currency_symbol, locale, loading } = useGeoLocation()
  const guaranteeImage = getImageById('guarantee-2')
  const securityImage = getImageById('security-1')

  const handleAddToCart = () => {
    addItem(mainProduct)
    toast.success('¡Producto agregado al carrito!')
    setTimeout(() => toggleCart(), 500)
  }

  return (
    <section className="section-spacing bg-gradient-to-br from-trust-50 via-white to-success-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Main Guarantee Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              {/* Left Side - Visual */}
              <div className="bg-gradient-to-br from-trust-600 to-trust-700 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>
                <div className="relative text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl"
                  >
                    <Shield className="text-trust-600" size={80} />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    Garantía de
                    <br />7 Días
                  </h3>
                  <p className="text-trust-100 text-lg">
                    100% Libre de Riesgo
                  </p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Pruébalo Sin Ningún Riesgo
                </h3>

                <p className="text-xl text-gray-700 mb-8">
                  Estamos tan seguros de que este ebook transformará tu vida,
                  que te ofrecemos una garantía simple:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Accede al ebook completo durante 7 días',
                    'Lee todo el contenido y descarga los recursos',
                    'Aplica las técnicas y estrategias',
                    'Si no estás satisfecho, te devolvemos TODO tu dinero',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="text-success-600 flex-shrink-0 mt-1" size={24} />
                      <p className="text-gray-700 text-lg">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-success-50 border border-success-200 rounded-xl p-6 mb-8">
                  <p className="text-success-900 font-semibold mb-2">
                    Sin Preguntas, Sin Complicaciones
                  </p>
                  <p className="text-success-800">
                    Un simple email es todo lo que necesitas para obtener un reembolso completo
                    dentro de los primeros 7 días.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="btn-primary w-full text-lg"
                >
                  <span>Comenzar Ahora Sin Riesgo</span>
                  <ArrowRight size={24} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            {/* Guarantee Badge */}
            {guaranteeImage && (
              <div className="bg-white rounded-xl p-6 shadow-soft flex items-center justify-center">
                <div className="relative w-full h-48">
                  <Image
                    src={guaranteeImage.url}
                    alt={guaranteeImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {/* Security Badge */}
            {securityImage && (
              <div className="bg-white rounded-xl p-6 shadow-soft flex items-center justify-center">
                <div className="relative w-full h-48">
                  <Image
                    src={securityImage.url}
                    alt={securityImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Pago 100% Seguro',
                description: 'Procesado por Hotmart, la plataforma más confiable de América Latina',
              },
              {
                title: 'Acceso Inmediato',
                description: 'Comienza a aprender en menos de 2 minutos después de tu compra',
              },
              {
                title: 'Soporte Prioritario',
                description: 'Nuestro equipo responde todas tus dudas en menos de 24 horas',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-soft text-center">
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Urgency Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
          >
            <p className="text-2xl font-bold mb-2">
              ⚡ Oferta Especial: Solo Hoy 75% de Descuento
            </p>
            <p className="text-primary-100">
              {loading ? (
                'Cargando precio...'
              ) : (
                <>
                  El precio volverá a {formatPrice(51.96, currency, currency_symbol, locale)} en cualquier momento. No pierdas esta oportunidad.
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
